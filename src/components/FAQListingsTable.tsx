// // import * as React from 'react';
// // import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

// // const columns: GridColDef[] = [
// //   { field: 'id', headerName: 'ID', width: 70 },
// //   { field: 'firstName', headerName: 'First name', width: 130 },
// //   { field: 'lastName', headerName: 'Last name', width: 130 },
// //   {
// //     field: 'age',
// //     headerName: 'Age',
// //     type: 'number',
// //     width: 90,
// //   },
// //   {
// //     field: 'fullName',
// //     headerName: 'Full name',
// //     description: 'This column has a value getter and is not sortable.',
// //     sortable: false,
// //     width: 160,
// //     valueGetter: (params: GridValueGetterParams) =>
// //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
// //   },
// // ];

// // const rows = [
// //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
// //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
// //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
// //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
// //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
// //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
// //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
// //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
// //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// // ];

// // export default function DataTable() {
// //   return (
// //     <div style={{ height: 400, width: '100%' }}>
// //       <DataGrid
// //         rows={rows}
// //         columns={columns}
// //         pageSize={5}
// //         rowsPerPageOptions={[5]}
// //         checkboxSelection
// //       />
// //     </div>
// //   );
// // }



// import * as React from 'react';
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { visuallyHidden } from '@mui/utils';
// import { AnyRecord } from 'dns';

// interface Data {
//   type: any;
//   category: any;
//   project: any;
//   sequence: any;
//   createdby: any;
//   modifieddate: any;
//   action: any;
// }

// function createData(
//   type: any | number,
//   category: any,
//   project: any,
//   sequence: any,
//   createdby: any,
//   modifieddate: any,
//   action: any,
// ): Data {
//   return {
//     type,
//     category,
//     project,
//     sequence,
//     createdby,
//     modifieddate,
//     action
//   };
// }

// const rows = [
//   createData('Cupcake', 305, 3.7, 67, 4.3, 54, 75),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 54, 75),
//   createData('Donut', 452, 25.0, 51, 4.9, 276, 386),
//   createData('Eclair', 262, 16.0, 24, 6.0,3834, 3847),
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 347, 476),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 46, 4876),
//   createData('Honeycomb', 408, 3.2, 87, 6.5, 3746, 347),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4867, 8487),
//   // createData('Jelly Bean', 375, 0.0, 94, 0.0),
//   // createData('KitKat', 518, 26.0, 65, 7.0),
//   // createData('Lollipop', 392, 0.2, 98, 0.0),
//   // createData('Marshmallow', 318, 0, 81, 2.0),
//   // createData('Nougat', 360, 19.0, 9, 37.0),
//   // createData('Oreo', 437, 18.0, 63, 4.0),
// ];

// function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// type Order = 'asc' | 'desc';

// function getComparator<Key extends keyof any>(
//   order: Order,
//   orderBy: Key,
// ): (
//   a: { [key in Key]: number | string },
//   b: { [key in Key]: number | string },
// ) => number {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// // This method is created for cross-browser compatibility, if you don't
// // need to support IE11, you can use Array.prototype.sort() directly
// function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
//   const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// interface HeadCell {
//   disablePadding: boolean;
//   id: keyof Data;
//   label: string;
//   numeric: boolean;
// }

// const headCells: readonly HeadCell[] = [
//   {
//     id: 'type',
//     numeric: false,
//     disablePadding: true,
//     label: 'Type',
//   },
//   {
//     id: 'category',
//     numeric: true,
//     disablePadding: false,
//     label: 'Category',
//   },
//   {
//     id: 'project',
//     numeric: true,
//     disablePadding: false,
//     label: 'Project',
//   },
//   {
//     id: 'sequence',
//     numeric: true,
//     disablePadding: false,
//     label: 'Sequence',
//   },
//   {
//     id: 'createdby',
//     numeric: true,
//     disablePadding: false,
//     label: 'Created by',
//   },
//   {
//     id: 'modifieddate',
//     numeric: true,
//     disablePadding: false,
//     label: 'Modified Date',
//   },
//   {
//     id: 'action',
//     numeric: true,
//     disablePadding: false,
//     label: 'Action',
//   },
// ];

// interface EnhancedTableProps {
//   numSelected: number;
//   onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
//   onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   order: Order;
//   orderBy: string;
//   rowCount: number;
// }

// function EnhancedTableHead(props: EnhancedTableProps) {
//   const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
//     props;
//   const createSortHandler =
//     (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
//       onRequestSort(event, property);
//     };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             color="primary"
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{
//               'aria-label': 'select all desserts',
//             }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             // align={headCell.numeric ? 'right' : 'left'}
//             align='center'
//             padding={headCell.disablePadding ? 'none' : 'normal'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
              
//             >
//               <strong>{headCell.label}</strong>
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// interface EnhancedTableToolbarProps {
//   numSelected: number;
// }

// const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
//         }),
//       }}
//     >
//       {numSelected > 0 && (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) }
//       {numSelected > 0 && (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) }
//     </Toolbar>
//   );
// };

// export default function EnhancedTable() {
//   const [order, setOrder] = React.useState<Order>('asc');
//   const [orderBy, setOrderBy] = React.useState<keyof Data>('type');
//   const [selected, setSelected] = React.useState<readonly string[]>([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const handleRequestSort = (
//     event: React.MouseEvent<unknown>,
//     property: keyof Data,
//   ) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.checked) {
//       const newSelecteds = rows.map((n) => n.type);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event: React.MouseEvent<unknown>, type: string) => {
//     const selectedIndex = selected.indexOf(type);
//     let newSelected: readonly string[] = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, type);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }

//     setSelected(newSelected);
//   };

//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setDense(event.target.checked);
//   };

//   const isSelected = (type: string) => selected.indexOf(type) !== -1;

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Paper sx={{ width: '100%' }}>
//         {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
//         <TableContainer>
//           <Table
//             sx={{ minWidth: 750 }}
//             aria-labelledby="tableTitle"
//             size={dense ? 'small' : 'medium'}

//           >
//             <EnhancedTableHead
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//             <TableBody>
//               {/* if you don't need to support IE11, you can replace the `stableSort` call with:
//               rows.slice().sort(getComparator(order, orderBy)) */}
//               {stableSort(rows, getComparator(order, orderBy))
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row : any, index) => {
//                   const isItemSelected = isSelected(row.type);
//                   const labelId = `enhanced-table-checkbox-${index}`;

//                   return (
//                     <TableRow
//                     //   hover
//                       onClick={(event) => handleClick(event, row.type)}
//                       role="checkbox"
//                       aria-checked={isItemSelected}
//                       tabIndex={-1}
//                       key={row.type}
//                       selected={isItemSelected}
//                     >
//                       <TableCell padding="checkbox">
//                         <Checkbox
//                           color="primary"
//                           checked={isItemSelected}
//                           inputProps={{
//                             'aria-labelledby': labelId,
//                           }}
//                         />
//                       </TableCell>
//                       <TableCell
//                         component="th"
//                         id={labelId}
//                         scope="row"
//                         padding="none"
//                       >
//                         {row.type}
//                       </TableCell>
//                       <TableCell align="center">{row.category}</TableCell>
//                       <TableCell align="center">{row.project}</TableCell>
//                       <TableCell align="center">{row.sequence}</TableCell>
//                       <TableCell align="center">{row.createdby}</TableCell>
//                       <TableCell align="center">{row.modifieddate}</TableCell>
//                       <TableCell align="center">{row.action}</TableCell>
//                     </TableRow>
//                   );
//                 })}
//               {emptyRows > 0 && (
//                 <TableRow
//                   style={{
//                     height: (dense ? 33 : 53) * emptyRows,
//                   }}
//                 >
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//       {/* <FormControlLabel
//         control={<Switch checked={dense} onChange={handleChangeDense} />}
//         label="Dense padding"
//       /> */}
//     </Box>
//   );
// }







import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { StringDecoder } from 'string_decoder';

import { EditOutlined, DeleteOutline, RemoveRedEyeOutlined } from '@mui/icons-material';


interface Data {
  type : string;
  category: number;
  project: number;
  sequence: number;
  createdby: string;
  modifieddate: number;
  action: number;
}

function createData(
  type: string,
  category: number,
  project: number,
  sequence: number,
  createdby: any,
  modifieddate: number,
  action: number,
): Data {
  return {
    type,
    category,
    project,
    sequence,
    createdby,
    modifieddate,
    action
  };
}

const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3, 3754, 374),
  createData('Donut', 452, 25.0, 51, 4.9, 3746, 346),
  createData('Eclair', 262, 16.0, 24, 6.0, 3746, 356),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3476, 346),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 346, 347),
  createData('Honeycomb', 408, 3.2, 87, 6.5, 3476, 456),
  // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  // createData('Jelly Bean', 375, 0.0, 94, 0.0),
  // createData('KitKat', 518, 26.0, 65, 7.0),
  // createData('Lollipop', 392, 0.2, 98, 0.0),
  // createData('Marshmallow', 318, 0, 81, 2.0),
  // createData('Nougat', 360, 19.0, 9, 37.0),
  // createData('Oreo', 437, 18.0, 63, 4.0),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'type',
    numeric: false,
    disablePadding: true,
    label: 'Type',
  },
  {
    id: 'project',
    numeric: false,
    disablePadding: true,
    label: 'Project',
  },
  {
    id: 'category',
    numeric: true,
    disablePadding: false,
    label: 'Category',
  },
  {
    id: 'sequence',
    numeric: true,
    disablePadding: false,
    label: 'Sequence',
  },
  {
    id: 'createdby',
    numeric: true,
    disablePadding: false,
    label: 'Created By',
  },
  {
    id: 'modifieddate',
    numeric: true,
    disablePadding: false,
    label: 'Modified Date',
  },
  {
    id: 'action',
    numeric: true,
    disablePadding: false,
    label: 'Action',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'center'}
            // align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            // sx={{color : 'red'}}
            className='table-heading'
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected } = props;

  return (
    <>
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 && (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) }
      {numSelected > 0 && (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) }
    </Toolbar>
    </>
  );
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('category');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.type);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%', marginLeft : '-1rem' }} >

      <div className='table-container-div' >
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle" 
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.type);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <>
    {/* <TableRow component={'div'} sx={{marginTop : '1rem'}}></TableRow> */}
    {/* <div style={{marginTop : '0.4rem'}}></div> */}
                    
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.type)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.type}
                      selected={isItemSelected}
                      className='table-row'
                      // sx={{backgroundColor :'#f7f6f8', borderTop : '5px solid #ffffff', borderBottom : '10px solid #ffffff'}}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align="center"
                      >
                        {row.type}
                      </TableCell>
                      <TableCell align="center">{row.category}</TableCell>
                      <TableCell align="center">{row.project}</TableCell>
                      <TableCell align="center">{row.sequence}</TableCell>
                      <TableCell align="center">{row.createdby}</TableCell>
                      <TableCell align="center">{row.modifieddate}</TableCell>
                      <TableCell  align="right">
                        <EditOutlined className='btn-edit' /> <DeleteOutline className='btn-delete' /> <RemoveRedEyeOutlined className='btn-eye' />
                      </TableCell>
                    </TableRow>
                    </>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        
      </div>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </Box>
  );
}
