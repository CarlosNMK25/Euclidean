import { EuclideanSequencer } from './components/EuclideanSequencer';
import { PerformanceMonitor } from './components/PerformanceMonitor';

export default function App() {
  return (
    <main className="min-h-screen flex items-start justify-center p-4 md:p-8 bg-idm-bg">
      <EuclideanSequencer />
      <PerformanceMonitor />
    </main>
  );
}
