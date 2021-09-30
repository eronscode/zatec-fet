import { useMemo } from "react";
import { usePagination, useSortBy, useTable } from "react-table";
import PropTypes from "prop-types";
import { TableContainer, TableWrapper } from "./styles";

const propTypes = {
  className: PropTypes.string,
  tableData: PropTypes.arrayOf(PropTypes.object),
  tableColumns: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
};

const defaultProps = {
  className: undefined,
  tableData: [],
  tableColumns: [],
  isLoading: undefined,
};

function Table({ tableData, tableColumns }) {
  const data = useMemo(() => tableData, []);
  const columns = useMemo(() => tableColumns, []);
//   let useSelection = (hooks) => {
//     hooks.visibleColumns.push((columns) => [
//       ...columns,
//         columns.style = {},
      
//     ]);
//   };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 1 } },
    useSortBy,
    usePagination,
    // useSelection
  );

  return (
    <TableWrapper>
      <TableContainer {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                console.log({ column });
                return (
                  <th
                    style={{ ...column.style }}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <p>
                      {column.render("Header")}
                      <span>
                        {column?.isSorted &&
                          (column?.isSortedDesc ? " ?" : " ?")}
                      </span>
                    </p>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
          {page.length === 0 && <p>No results</p>}
        </tbody>
      </TableContainer>
      <div className='pagination'>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageCount}
          </strong>{" "}
        </span>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[2, 4, 5, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </TableWrapper>
  );
}

Table.defaultProps = defaultProps;
Table.propTypes = propTypes;

export default Table;
