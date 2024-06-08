import React from 'react'
import { useTable, useSortBy } from 'react-table'

const TableBox = () => {
  const data = React.useMemo(() => [
    {
      id: 1,
      gender: "male",
      salary: 100000,
    },
    {
      id: 2,
      gender: "male",
      salary: 200000,
    },
    {
      id: 3,
      gender: "male",
      salary: 300000,
    }
  ], [])

  const columns = React.useMemo(() => [
    {
      Header: "ID",
      accessor: "id"
    },
    {
      Header: "Gender",
      accessor: "gender"
    },
    {
      Header: "Salary",
      accessor: "salary"
    }
  ], [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  }, useSortBy)

  return (
    <table {...getTableProps()} className="min-w-full bg-white border border-gray-200">
      <thead className="bg-gray-50">
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-100">
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className="px-4 py-2 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              >
                {column.render('Header')}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' 🔽'
                      : ' 🔼'
                    : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} className="hover:bg-gray-100">
              {row.cells.map(cell => (
                <td
                  {...cell.getCellProps()}
                  className="px-4 py-2 border-b border-gray-200 text-sm text-gray-900"
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TableBox
