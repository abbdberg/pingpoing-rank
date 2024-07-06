import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Sparklines, SparklinesBars } from 'react-sparklines';

const fakePlayers = [
  { rank: 1, name: 'John Doe', eloScore: 2100, eloHistory: [2000, 2050, 2100, 2150, 2200] },
  { rank: 2, name: 'Alice Smith', eloScore: 2050, eloHistory: [2000, 2020, 2050, 2080, 2100] },
  // Add more fake players here...
];


const User = () => {
  const eloHistoryTemplate = (rowData) => {
    return (
      <Sparklines data={rowData.eloHistory} width={100} height={20} margin={5}>
        <SparklinesBars />
      </Sparklines>
    );
  };

  return (
    <DataTable value={fakePlayers}>
      <Column field="rank" header="Rank"></Column>
      <Column field="name" header="Player Name"></Column>
      <Column field="eloScore" header="Elo Score"></Column>
      <Column field="eloHistory" header="Elo History" body={eloHistoryTemplate}></Column>
    </DataTable>
  );
};

export default User;