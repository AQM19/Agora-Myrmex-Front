'use client'

import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import React from 'react'

interface Props {
    from: number;
    to: number;
}

const MonthChart = ({ from, to }: Props) => {
    const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const generateMonthRange = (from: number, to: number) => {
        const months = [];
        let current = from;

        while (true) {
            months.push(current);
            if (current === to) break;
            current = current === 12 ? 1 : current + 1;
        }

        return months.sort((a, b) => a - b);
    }
    const generateApexSeries = (from: number, to: number): ApexAxisChartSeries => {
        const months = generateMonthRange(from, to);
        const ranges: { x: string; y: [number, number] }[] = [];

        let currentRange: number[] = [months[0]];

        for (let i = 1; i < months.length; i++) {
            const currentMonth = months[i];
            const prevMonth = months[i - 1];

            if (currentMonth !== prevMonth + 1) {
                ranges.push({
                    x: 'Range',
                    y: [currentRange[0], prevMonth]
                });
                currentRange = [currentMonth];
            }
        }

        ranges.push({
            x: 'Range',
            y: [currentRange[0], months[months.length - 1]]
        });

        return [{
            data: ranges
        }];
    }

    const isMobile = window.matchMedia("(max-width: 600px)").matches;

    const options: ApexOptions = {
        chart: {
            type: 'rangeBar',
            animations: {
                enabled: false
            },
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        xaxis: {
            type: 'numeric',
            min: 1,
            max: 12,
            tickAmount: isMobile ? 3 : 11,
            labels: {
                formatter: function (val) {
                    return months[Math.floor(+val) - 1] || '';
                }
            }
        },
        yaxis: {
            show: false
        },
        grid: {
            show: false
        },
        legend: {
            show: false
        },
        tooltip: {
            enabled: false
        }
    };

    const series: ApexAxisChartSeries = generateApexSeries(from, to);

    return (
        <div className='w-full min-h-40'>
            <div id="chart">
                <Chart
                    options={options}
                    series={series}
                    type="rangeBar"
                    height={150}
                />
            </div>
            <div id="html-dist"></div>
        </div>
    )
}

export default MonthChart