import { useMemo } from "react";
import { usePagination, useSortBy, useTable } from "react-table";
import PropTypes from "prop-types";
import { TableContainer, TableWrapper } from "./styles";
import { ChevronIcon } from "utils/icons";

const propTypes = {
  className: PropTypes.string,
  tableData: PropTypes.arrayOf(PropTypes.object),
  tableColumns: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  pageLength: PropTypes.number,
};

const defaultProps = {
  className: undefined,
  tableData: [],
  tableColumns: [],
  isLoading: undefined,
  pageLength: 10,
};

function Table({ tableData, tableColumns, pageLength }) {
  const data = useMemo(() => tableData, [tableData]);
  const columns = useMemo(() => tableColumns, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    // visibleColumns,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: pageLength } },
    useSortBy,
    usePagination
  );

 

  return (
    <TableWrapper>
      <TableContainer {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                return (
                  <th
                    style={{ ...column.style }}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <p>
                      {column.render("Header")}
                      <span>
                        {column?.isSorted && column?.isSortedDesc ? (
                          <ChevronIcon />
                        ) : column?.isSorted && !column?.isSortedDesc ? (
                          <ChevronIcon rotate={180} />
                        ) : (
                          ''
                        )}
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
          {page.length === 0 && (
            <tr style={{ background: "transparent" }}>
              <td colSpan='3'>
                <p className='noData'>No results</p>
              </td>
            </tr>
          )}
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
          {[5, 10, 15, 20, 25, 30].map((pageSize) => (
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
