import { useState } from 'react'

export const useCandlesChart = () => {
  let channelId = null
  const [dataChart, setDataChart] = useState({
    series: [{ data: [] }],
    zoom: {
      type: 'x',
      enabled: true,
      autoScaleYaxis: true,
    },
    toolbar: {
      autoSelected: 'zoom',
    },
    options: {
      title: {
        text: 'Bitcoin (1D)',
        align: 'left',
        style: {
          fontSize: '16px',
        },
      },
      xaxis: {
        type: 'datetime',
        zoom: {
          enabled: false,
        },
      },
      yaxis: {
        tooltip: { enabled: true },
        decimalsInFloat: 2,
      },
      tooltip: {
        theme: 'dark',
      },
      chart: {
        zoom: {
          enabled: false,
          type: 'x',
          autoScaleYaxis: false,
          zoomedArea: {
            fill: {
              color: '#90CAF9',
              opacity: 0.4,
            },
            stroke: {
              color: '#0D47A1',
              opacity: 0.4,
              width: 1,
            },
          },
        },
      },
      candlestick: {
        wick: {
          useFillColor: true,
        },
      },
    },
  })

  const consumeCandleChartWebSocket = message => {
    if (message.event && message.event === 'subscribed' && message.channel === 'candles') {
      channelId = message.chanId
      return
    }

    if (channelId !== message[0]) return
    if (message[1] === 'hb' || !Array.isArray(message[1])) return

    if (message[1].length > 150) {
      const collection = message[1].map(data => {
        const [timestamp, open, close, high, low] = data
        return {
          x: new Date(timestamp),
          y: [open.toFixed(2), high.toFixed(2), low.toFixed(2), close.toFixed(2)],
        }
      })
      setDataChart(prevState => ({
        ...prevState,
        series: [
          {
            data: collection,
          },
        ],
      }))
      return
    }

    const [timestamp, open, close, high, low] = message[1]
    setDataChart(prevState => ({
      ...prevState,
      series: [
        {
          data: [
            ...prevState.series[0].data,
            {
              x: new Date(timestamp),
              y: [open.toFixed(2), high.toFixed(2), low.toFixed(2), close.toFixed(2)],
            },
          ],
        },
      ],
    }))
  }

  return {
    dataChart,
    consumeCandleChartWebSocket,
  }
}
