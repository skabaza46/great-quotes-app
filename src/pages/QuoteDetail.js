import React from 'react';

import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
// import NoQuotesFound from '../components/quotes/NoQuotesFound';


const DUMMY_QUOTES = [
  {id: "q1", author: "skabaza", text: "Learning PHP is fun !"},
  {id: "q2", author: "skabaza", text: "Learning Node is fun !"},
  {id: "q3", author: "skabaza", text: "Learning React is fun !"},
];

const QuoteDetail = () => {

  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if (!quote){
    return <p> No quote found !</p>
  }

  return (
    <React.Fragment>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>

  );
};


export default QuoteDetail;
