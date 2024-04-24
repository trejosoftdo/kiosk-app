import { renderHook, act } from '@testing-library/react-hooks';
import { useInterval, useProgress } from '../hooks';

const flushPromises = () => new Promise(setImmediate);


describe('Hooks', () => {

  describe('useProgress', () => {
    const mockLoad = jest.fn();
    const mockData = {
      title: 'Testing promises',
    };

    beforeEach(() => {
      jest.resetAllMocks();
    });

    it('indicates the progress of the promise', async () => {
      mockLoad.mockResolvedValue(mockData);
      const { result } = renderHook(() => useProgress(mockLoad));
    
      await act(() => flushPromises());

      expect(result.current.data).toEqual(mockData);
      expect(result.current.loading).toEqual(false);
      expect(result.current.error).toEqual(null);
    });

    it('maps the data when a mapper is specified', async () => {
      mockLoad.mockResolvedValue(mockData);
      const mapper = (x) => ({ title: `Mapped: ${x.title}`});
      const { result } = renderHook(() => useProgress(mockLoad, mapper));
      
      await act(() => flushPromises());

      expect(result.current.data).toEqual({
        title: 'Mapped: Testing promises',
      });
      expect(result.current.loading).toEqual(false);
      expect(result.current.error).toEqual(null);
    });

    it('indicates when an error has ocurred', async () => {
      const mockError = new Error('Mock error');
      mockLoad.mockRejectedValue(mockError);
      const { result } = renderHook(() => useProgress(mockLoad));
      
      await act(() => flushPromises());

      expect(result.current.data).toEqual(null);
      expect(result.current.loading).toEqual(false);
      expect(result.current.error).toEqual(mockError);
    });
  });

  describe('useInterval', () => {
    const setIntervalSpy = jest.spyOn(global, 'setInterval');

    beforeEach(() => {
      jest.useFakeTimers({
        doNotFake: [
          'nextTick',
          'setImmediate',
          'clearImmediate',
          'setTimeout',
          'clearTimeout',
        ]
      });
    });

    afterAll(() => {
      jest.useRealTimers();
    });

    it('calls the callback at a given time interval', async () => {
      const mockCallback = jest.fn((interval) => { interval.clear(); });
      const mockDelay = 1000;
  
      renderHook(() => useInterval(mockCallback, mockDelay));
      
      jest.advanceTimersByTime(1000);
      await act(() => flushPromises());

      expect(mockCallback).toHaveBeenCalledTimes(1);
    });

    it('does not calls the callback if interval time is null', async () => {
      const mockCallback = jest.fn((interval) => { interval.clear(); });
      
      renderHook(() => useInterval(mockCallback, null));
      
      jest.advanceTimersByTime(1000);
      await act(() => flushPromises());

      expect(mockCallback).toHaveBeenCalledTimes(0);
    });
  });
});