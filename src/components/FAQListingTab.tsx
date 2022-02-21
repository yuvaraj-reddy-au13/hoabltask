// import * as React from 'react';
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

// const columns: GridColDef[] = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
  
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export default function DataTable() {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       />
//     </div>
//   );
// }


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox, Box , Card} from '@mui/material';

import { EditOutlined, DeleteOutline, RemoveRedEyeOutlined } from '@mui/icons-material';

function createData(
  type: string,
  category: any,
  project: any,
  sequence: any,
  createdby: any,
  modifieddate: any,
  action: any,
) {
  return { type, category, project, sequence, createdby, modifieddate, action };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 48, 4786),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 48, 4786),
//   createData('Eclair', 262, 16.0, 24, 6.0, 48, 4786),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 48, 4786),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 48, 4786),
// ];

const rows = [
    {
        type : 'sample',
        category : 'some category',
        project : 'sample proj',
        sequence : 'sample Seq',
        createdby : 'sample user',
        modifieddate : 'some date',
        action : 'some actions'
    },
    {
        type : 'sample',
        category : 'some category',
        project : 'sample proj',
        sequence : 'sample Seq',
        createdby : 'sample user',
        modifieddate : 'some date',
        action : 'some actions'
    },
]

export default function DenseTable() {
  return (

    <TableContainer component={Card} sx={{minHeight:'60vh'}}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{borderShadow : 'none' }} > 
              <TableCell>
              <Checkbox />
              </TableCell>
            <TableCell style={{color : '#272165', fontWeight: 750}}>Type</TableCell>
            <TableCell style={{color : '#272165', fontWeight: 750}} align="right" >Category</TableCell>
            <TableCell style={{color : '#272165', fontWeight: 750}}  align="right">Project</TableCell>
            <TableCell style={{color : '#272165', fontWeight: 750}} align="right">Sequence</TableCell>
            <TableCell style={{color : '#272165', fontWeight: 750}} align="right">Created By</TableCell>
            <TableCell style={{color : '#272165', fontWeight: 750}} align="right">Modified Date</TableCell>
            <TableCell style={{color : '#272165', fontWeight: 750}} align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
              <>
              <div style={{marginTop : '0.3rem'}}></div>
            <TableRow
            
              key={row.type}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } , backgroundColor : '#f7f6f8'}}
              
            >
              <TableCell ><Checkbox /></TableCell>
              <TableCell component="th" scope="row">
                {row.type}
              </TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.project}</TableCell>
              <TableCell align="right">{row.sequence}</TableCell>
              <TableCell align="right">{row.createdby}</TableCell>
              <TableCell align="right">{row.modifieddate}</TableCell>
              {/* <TableCell align="right">{row.action}</TableCell> */}
              <TableCell align="center" >
                  {/* <div style={{justifyContent:'space-between'}}> */}
                  <EditOutlined sx={{color : '#2a2471'}} /><DeleteOutline className='delete-btn' sx={{margin : '0 0.7rem', color: '#ff485a'}} /><RemoveRedEyeOutlined className='eye-icon' sx={{color : '#2a2471'}} />
                  {/* </div> */}
              </TableCell>
            </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

