import React from 'react';
import benchmarkResults from '../../../tzip-12/benchmarks.json';
export default (props) => {
    const displayMode = props.displayMode;
    return <table>
    <thead>
        <tr>
            <th></th>
            <th># of tokens</th>
            <th># of token IDs</th>
            <th># of owners</th>
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
                    <td colspan="3" class="text-center">
                       <i>Data below explained in a footnote<sup>1</sup></i>
                    </td>
                    {benchmarkResults.contracts.map(name => {
                        return <td></td>
                    })}
                </tr>,
                Object.keys(benchmarkResults.cases[name]).map(testGroup => {
                    const testData = Object.values(benchmarkResults.cases[name][testGroup])[0].extras;
                    return <tr>
                        <td >
                           {testGroup.split('_')[0].split('-').join(' ')}
                        </td>
                        {{
                            'origination': 
                                [<td>{testData.initialStorage.numberOfTokens} / - / -</td>,
                                <td>{testData.initialStorage.numberOfTokenIDs} / - / -</td>,
                                <td>{testData.initialStorage.numberOfOwners} / - / -</td>]
                        }[name]}

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