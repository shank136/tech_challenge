import { useState, useMemo } from 'react';

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = useState(config);

    const sortedItems = useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};

const Table = ({ songs }) => {
    const { items, requestSort, sortConfig } = useSortableData(songs);

    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return (
        <>
            <h1 className='title'>Super Hit Songs</h1>
            <table className='song'>
                <thead>
                    <tr>
                        <th>
                            <button
                                type='button'
                                onClick={() => requestSort('song')}
                                className={getClassNamesFor('song')}>
                                SONG
                            </button>
                        </th>
                        <th>
                            <button
                                type='button'
                                onClick={() => requestSort('artist')}
                                className={getClassNamesFor('artist')}>
                                ARTIST
                            </button>
                        </th>
                        <th>
                            <button
                                type='button'
                                onClick={() => requestSort('songReleaseDate')}
                                className={getClassNamesFor('songReleaseDate')}>
                                RELEASE DATE
                            </button>
                        </th>
                        <th>
                            <button
                                type='button'
                                onClick={() => requestSort('playCount')}
                                className={getClassNamesFor('playCount')}>
                                PLAY COUNT
                            </button>
                        </th>
                        <th>
                            <button
                                type='button'
                                onClick={() => requestSort('metricA')}
                                className={getClassNamesFor('metricA')}>
                                METRIC A
                            </button>
                        </th>
                        <th>
                            <button
                                type='button'
                                onClick={() => requestSort('metricB')}
                                className={getClassNamesFor('metricB')}>
                                METRIC B
                            </button>
                        </th>
                        <th>
                            <button
                                type='button'
                                onClick={() => requestSort('metricC')}
                                className={getClassNamesFor('metricC')}>
                                METRIC C
                            </button>
                        </th>
                        <th>
                            <button
                                type='button'
                                onClick={() => requestSort('metricD')}
                                className={getClassNamesFor('metricD')}>
                                METRIC D
                            </button>
                        </th>
                        <th>
                            <button
                                type='button'
                                onClick={() => requestSort('metricE')}
                                className={getClassNamesFor('metricE')}>
                                METRIC E
                            </button>
                        </th>
                        <th>
                            <button
                                type='button'
                                onClick={() => requestSort('metricF')}
                                className={getClassNamesFor('metricF')}>
                                METRIC F
                            </button>
                        </th>
                        <th>
                            <button
                                type='button'
                                onClick={() => requestSort('metricG')}
                                className={getClassNamesFor('metricG')}>
                                METRIC G
                            </button>
                        </th>
                        <th>
                            <button
                                type='button'
                                onClick={() => requestSort('metricH')}
                                className={getClassNamesFor('metricH')}>
                                METRIC H
                            </button>
                        </th>
                        <th>
                            <button
                                type='button'
                                onClick={() => requestSort('metricI')}
                                className={getClassNamesFor('metricI')}>
                                METRIC I
                            </button>
                        </th>
                        <th>
                            <button
                                type='button'
                                onClick={() => requestSort('metricJ')}
                                className={getClassNamesFor('metricJ')}>
                                METRIC J
                            </button>
                        </th>
                        <th>
                            <button
                                type='button'
                                onClick={() => requestSort('metricK')}
                                className={getClassNamesFor('metricK')}>
                                METRIC K
                            </button>
                        </th>
                        <th>
                            <button
                                type='button'
                                onClick={() => requestSort('metricL')}
                                className={getClassNamesFor('metricL')}>
                                METRIC L
                            </button>
                        </th>
                        <th>
                            <button
                                type='button'
                                onClick={() => requestSort('metricM')}
                                className={getClassNamesFor('metricM')}>
                                METRIC M
                            </button>
                        </th>
                        <th>
                            <button
                                type='button'
                                onClick={() => requestSort('metricN')}
                                className={getClassNamesFor('metricN')}>
                                METRIC N
                            </button>
                        </th>
                        <th>
                            <button
                                type='button'
                                onClick={() => requestSort('metricO')}
                                className={getClassNamesFor('metricO')}>
                                METRIC O
                            </button>
                        </th>
                        <th>
                            <button
                                type='button'
                                onClick={() => requestSort('metricP')}
                                className={getClassNamesFor('metricP')}>
                                METRIC P
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.song}</td>
                            <td>{item.artist}</td>
                            <td>{item.songReleaseDate}</td>
                            <td>{item.playCount}</td>
                            <td>{item.metricA}</td>
                            <td>{item.metricB}</td>
                            <td>{item.metricC}</td>
                            <td>{item.metricD}</td>
                            <td>{item.metricE}</td>
                            <td>{item.metricF}</td>
                            <td>{item.metricG}</td>
                            <td>{item.metricH}</td>
                            <td>{item.metricI}</td>
                            <td>{item.metricJ}</td>
                            <td>{item.metricK}</td>
                            <td>{item.metricL}</td>
                            <td>{item.metricM}</td>
                            <td>{item.metricN}</td>
                            <td>{item.metricO}</td>
                            <td>{item.metricP}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <a href='/' className='App-link'>Go to Home Page</a>
        </>
    );
};

export default Table;
