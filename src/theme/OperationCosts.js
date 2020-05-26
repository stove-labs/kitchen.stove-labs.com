import React from 'react';
import benchmarkResults from '../../../tzip-12/benchmarks.json';
export default (props) => {
    const displayMode = props.displayMode;
    return <table>
    <thead>
        <tr>
            <th></th>
            <th># of tokens<sup>1</sup></th>
            <th># of token IDs<sup>2</sup></th>
            <th># of owners<sup>3</sup></th>
            {benchmarkResults.contracts.map(name => {
                return <th>{name}</th>
            })}
        </tr>
    </thead>
    <tbody>
        {Object.keys(benchmarkResults.cases).map(name => {
            return [
                <tr>
                    <td className="capitalize"><b>{name}</b></td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    {benchmarkResults.contracts.map(name => {
                        return <td>-</td>
                    })}
                </tr>,
                Object.keys(benchmarkResults.cases[name]).map(testGroup => {
                    const testData = Object.values(benchmarkResults.cases[name][testGroup])[0].extras;
                    return <tr>
                        <td >
                           {testGroup.split('_')[0].split('-').join(' ')}
                        </td>
                        <td>{testData.numberOfTokens}</td>
                        <td>{testData.numberOfTokenIDs}</td>
                        <td>{testData.numberOfOwners}</td>
                        {Object.keys(benchmarkResults.cases[name][testGroup]).map(contractName => {
                            const results = benchmarkResults.cases[name][testGroup][contractName].results;
                            return <td>
                                {{
                                    'totalCost': 
                                        results.totalCost ?
                                            <b>{results.totalCost / 1000000}ꜩ</b>
                                        : '-',
                                    'gasLimit': 
                                        results.estimate.gasLimit ?
                                            <b>{results.estimate.gasLimit}</b>
                                        : '-',
                                    'storageLimit': 
                                    results.estimate.storageLimit ?
                                            <b>{results.estimate.storageLimit}</b>
                                        : '-'
                                }[displayMode]}
                            </td>
                        })}
                    </tr>
                })
            ]
        })}
    </tbody>
</table>
}