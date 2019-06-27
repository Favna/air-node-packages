import IconButton from '@material-ui/core/IconButton';
import MUITable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';
import { ActionBar, Button, Logo, SearchBar, Table, TableBodyCell, TableProps } from '@rws-air/ui-components';
import classnames from 'classnames';
import React, { FC, Fragment } from 'react';
import css from 'styles/modules/app.module.scss';

type dataForTableType = {
  name: string;
  email: string;
  id: number;
};

const dataForTable: dataForTableType[] = [
  { name: 'Robin Hood', email: 'robin.hood@winked.com', id: 23456789 },
  { name: 'Darth Vader', email: 'darth.vader@thedeathstart.com', id: 9876 },
  { name: 'Kaladin Stormblessed', email: 'kaladin.stormblessed@thearmy.com', id: 567890 },
  { name: 'Steve Jobs', email: 'steve.jobs@apple.com', id: 1 }
];

const dataTableHeaderMapping: Map<string, string> = new Map()
  .set('name', 'name')
  .set('email', 'email')
  .set('id', 'id');

const rowsPerPage = 5;
const page = 0;

const propsForTable: TableProps = {
  onsearchclear: () => console.log('cleared the search'),
  onsearchinput: () => console.log('got some search input'),
  onRequestSort: () => console.log('A sort was requested'),
  tooltipplacement: 'bottom-start',
  order: 'asc',
  orderby: 'name',
  rowsPerPage,
  rowsPerPageOptions: [2, 4, 5, 10],
  page,
  onChangePage: () => console.log('changed page'),
  onChangeRowsPerPage: () => console.log('changed rows per page'),
  headers: [
    { label: Array.from(dataTableHeaderMapping.keys())[0] },
    { label: Array.from(dataTableHeaderMapping.keys())[1] },
    { label: Array.from(dataTableHeaderMapping.keys())[2], numeric: true }
  ],
  headermapping: dataTableHeaderMapping,
  rowcount: dataForTable.length,
  labels: {
    labelpaginationof: 'of',
    labelrowsperpage: 'Rows per page',
    searchplaceholderlabel: 'Search...',
    tooltiplabel: 'Sort',
  },
  tableqas: {
    header: 'table-header',
    headerRow: 'table-header-row',
    pagination: 'table-pagination',
    table: 'table',
    toolbar: 'table-toolbar',
    headerCell: 'table-header-cell',
    tableBody: 'table-body',
  },
  tablebodycontent: (
    <Fragment>
      {dataForTable
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map(row => (
          <TableRow hover tabIndex={-1} key={Math.random()} className={css.tableRow} data-qa='sample-table-body-row' >
            <TableBodyCell content={row.name} />
            <TableBodyCell content={row.email} />
            <TableBodyCell content={row.id} />
          </TableRow>
        ))
      }
    </Fragment>
  ),
  tablecss: {
    table: [css.customTable, css.customTable],
    tableToolbar: [css.customTableToolbar],
  },
  paperElevation: 0,
};


const Home: FC = () => {
  return (
    <Fragment>
      <div>
        <ActionBar title='ActionBar Title' buttonLabel='action-bar-button' buttonAction={() => console.log('test')} shouldHaveButton />
      </div>
      <div className={css.logo}>
        <Logo />
      </div>
      <div className={css.app}>
        <header className={css.header}>
          <Button variant='contained' color='primary' label='Contained Primary Button' onClick={() => console.log('Clicked Contained Primary Button')} />
          <Button variant='contained' color='secondary' label='Contained Secondary Button' onClick={() => console.log('Clicked Contained Secondary Button')} />
          <Button variant='outlined' color='primary' label='Outlined Primary Button' onClick={() => console.log('Clicked Outlined Primary Button')} />
          <Button variant='outlined' color='secondary' label='Outlined Secondary Button' onClick={() => console.log('Clicked Outlined Secondary Button')} />
          <Button disabled variant='contained' color='primary' label='Disabled Contained Primary Button' onClick={() => console.log('Clicked Outlined Primary Button')} />
          <Button disabled variant='contained' color='secondary' label='Disabled Contained Secondary Button' onClick={() => console.log('Clicked Outlined Secondary Button')} />
        </header>
      </div>
      <div className={css.spacer}>
        <MUITable>
          <TableBody>
            <TableRow>
              <TableBodyCell content='cell content' />
              <TableBodyCell content={
                <IconButton>
                  <EditIcon color='primary' />
                </IconButton>
              } />
            </TableRow>
          </TableBody>
        </MUITable>
      </div>
      <div className={css.spacer}>
        <SearchBar
          data-qa='table-search-bar'
          placeholder={`Search...`}
          onChange={() => console.log('changed!')}
          onCancelSearch={() => console.log('Canceled Search!')}
          searchIcon={<SearchIcon className={classnames(css.searchIconButton)} />}
        />
      </div>
      <div className={css.spacer}>
        <Table {...propsForTable} />
      </div>
    </Fragment>
  );
};

export default Home;