import React from 'react';

const NytResults = (props) => {
    return (
        <div>
            {props.NytResults.map (result => {
                return (
                    <div key={result.id}>
                        <h3>{result.headline.main}</h3>
                        {result.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${result.mutimedia[1].url}`}/> : ''}
                        <p>
                            {result.snippet}
                            <br/>
                            {result.keywords.length > 0 ? 'Keywords:' : ''}
                        </p>
                        <ul>
                            {result.keywords.map (keyword => <li key={keyword.value}>{keyword.value}</li>)}
                        </ul>
                        <a href={result.web_url}>Read it</a>
                    </div>
                )
            })}
            <div>
                <button onClick={(e) => props.changePageNumber(e, 'down')}>Previous 10</button>
                <button onClick={(e) => props.changePageNumber(e, 'up')}>Next 10</button>
            </div>

        </div>

    );
};

export default NytResults;