import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Chip } from 'primereact/chip';

const matchHistoryData = [
  {
    date: '2024-07-01',
    time: '15:30',
    winner: '🏆 Alice',
    loser: '💔 Bob',
    score: '3-1',
  },
  // Add more dummy data here...
  {
    date: '2024-07-02',
    time: '14:00',
    winner: '🏆 Eve',
    loser: '💔 Charlie',
    score: '2-0',
  },
  {
    date: '2024-07-03',
    time: '16:45',
    winner: '🏆 Grace',
    loser: '💔 David',
    score: '3-2',
  },
  {
    date: '2024-07-04',
    time: '18:15',
    winner: '🏆 Frank',
    loser: '💔 Hannah',
    score: '2-1',
  },
];

export const History = () => {
  const renderScore = (rowData) => {
    return (
      <div>
        {rowData.score}
      </div>
    );
  };

  return (
    <DataTable value={matchHistoryData} paginator rows={10} dataKey="date">
      <Column field="date" header="Date" />
      <Column field="time" header="Time" />
      <Column field="winner" header="Winner" />
      <Column field="loser" header="Loser" />
      <Column body={renderScore} header="Score" />
    </DataTable>
  );
};

export default History;