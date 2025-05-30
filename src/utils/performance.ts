export const measurePerformance = (label: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.time(label);
    return () => console.timeEnd(label);
  }
  return () => {};
};

export const logPerformanceMetrics = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const metrics = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    console.log('Performance Metrics:', {
      'Time to First Byte': metrics.responseStart - metrics.requestStart,
      'DOM Content Loaded': metrics.domContentLoadedEventEnd - metrics.startTime,
      'Window Load': metrics.loadEventEnd - metrics.startTime,
    });
  }
};

export const measureComponentRender = (componentName: string) => {
  const start = performance.now();
  return () => {
    const end = performance.now();
    console.log(`${componentName} render time:`, end - start, 'ms');
  };
}; 