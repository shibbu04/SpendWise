import React from 'react';
import { Download } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { Button } from '../../../components/ui/Button';
import { ReportModal } from '../../../components/reports/ReportModal';
import { generateReport } from '../../../services/reports';
import { ExpenseReport, ReportType } from '../../../types/report';

export function Reports() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [reportData, setReportData] = React.useState<ExpenseReport | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleGenerateReport = async (type: ReportType) => {
    setIsLoading(true);
    try {
      const data = await generateReport(type);
      setReportData(data);
      setIsModalOpen(true);
    } catch (error) {
      toast.error('Failed to generate report');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-dark-card">
        <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-dark-text">
          Reports
        </h2>
        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full justify-between"
            onClick={() => handleGenerateReport('monthly')}
            disabled={isLoading}
          >
            <span>Download Monthly Report</span>
            <Download className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="w-full justify-between"
            onClick={() => handleGenerateReport('yearly')}
            disabled={isLoading}
          >
            <span>Download Yearly Report</span>
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {reportData && (
        <ReportModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={reportData}
        />
      )}
    </>
  );
}