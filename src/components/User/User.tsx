import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Sparklines, SparklinesBars } from 'react-sparklines';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';

const fakePlayers = [
  { rank: 1, name: 'John Doe', eloScore: 2100, eloHistory: [2000, 2050, 2100, 2150, 2200] },
  { rank: 2, name: 'Alice Smith', eloScore: 2050, eloHistory: [2000, 2020, 2050, 2080, 2100] },
  // Add more fake players here...
];


const User = () => {

  const [visible, setVisible] = useState(false);

  const eloHistoryTemplate = (rowData) => {
    return (
      <Sparklines data={rowData.eloHistory} width={100} height={20} margin={5}>
        <SparklinesBars />
      </Sparklines>
    );
  };

  return (
    <>
      <div className="back-title">Users</div>
      <Button label="Add new player" icon="pi pi-external-link" onClick={() => setVisible(true)} />
      <Dialog
      header="User Information"
      visible={visible}
      onHide={() => null}
      style={{ width: '400px' }}
    >
      <div className="p-fluid">
        <div className="p-field">
          <label htmlFor="name">
          <i className="pi pi-user"></i> Name
          </label>
          <InputText
            id="name"
            // value={name}
            onChange={(e) => alert(e.target.value)}
          />
        </div>
        <div className="p-field">
          <label htmlFor="email">
          <i className="pi pi-mail"></i> Email
          </label>
          <InputText
            id="email"
            // value={email}
            onChange={(e) => alert(e.target.value)}
          />
        </div>
      </div>
      <div className="p-dialog-footer">
        <Button label="Cancel" onClick={() => null} className="p-button-secondary" />
        <Button label="Submit" onClick={() => null} icon="pi pi-check" />
      </div>
    </Dialog>
      <DataTable value={fakePlayers}>
        <Column field="rank" header="Rank"></Column>
        <Column field="name" header="Player Name"></Column>
        <Column field="eloScore" header="Elo Score"></Column>
        <Column field="eloHistory" header="Elo History" body={eloHistoryTemplate}></Column>
      </DataTable>
    </>

  );
};

export default User;