import classNames from "classnames"
import MoneyAsText from "../../../components/MoneyAsText"
import { PercentAsText } from "../../../components/PercentAsText"
import { Skeleton } from "../../../components/Skeleton"
import { Table } from "../../../components/Table"

export const TableDashboard = ({ dataCoinRanking, loadingCoinRanking }) => {
  return (
    <Table.Root classNameDiv='my-4 lg:my-0 h-[350px] col-span-2 overflow-scroll no-scrollbar' text={
      <div className="bg-surface px-3 py-2">
        <h4 className="text-lg font-semibold">Market Values</h4>
      </div>
    }>
      <Table.Thead>
        <Table.Th textAlign='center' text='#' />
        <Table.Th expansiveTh text='Coin' />
        <Table.Th textAlign='right' text='Price (U$)' />
        <Table.Th textAlign='center' text='Change' />
      </Table.Thead>
      <Table.Tbody data={[{}]} loading={loadingCoinRanking} colSpan='4' skeleton={
          <div className="flex flex-col gap-2 px-3">
            <Skeleton height='69' />
            <Skeleton height='69' />
            <Skeleton height='69' />
            <Skeleton height='69' />
            <Skeleton height='69' />
            <Skeleton height='69' />
            <Skeleton height='69' />
            <Skeleton height='69' />
            <Skeleton height='69' />
            <Skeleton height='69' />
          </div>
      }>
        {dataCoinRanking.map(coin => (
          <Table.Tr key={coin.name}>
            <Table.Td textAlign='center' text={coin.rank} />
            <Table.Td text='&#32;'>
              <div className="flex items-center gap-3">
                <img src={coin.iconUrl} alt='icon' width={36} />
                <p className={`flex items-center gap-1 text-base text-[${coin.color}] font-semibold`}>{coin.name} <abbr className="italic text-gray-400 text-xs">{coin.symbol}</abbr></p>
              </div>
            </Table.Td>
            <Table.Td textAlign='right' text='&#32;' >
              <MoneyAsText className='font-bold text-gray-700' prefix='U$ ' value={coin.price} />
            </Table.Td>
            <Table.Td textAlign='center' text='&#32;' >
              <PercentAsText
                className={classNames('font-bold',{ 'text-positive': coin.change >= 0, 'text-negative': coin.change < 0 })}
                value={coin.change}
                />
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table.Root>
  )
}