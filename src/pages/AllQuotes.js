
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  {id: "q1", author: "skabaza", text: "Learning PHP is fun !"},
  {id: "q2", author: "skabaza", text: "Learning Node is fun !"},
  {id: "q3", author: "skabaza", text: "Learning React is fun !"},
];


const AllQuotes = () => {

  return (
    <QuoteList quotes={DUMMY_QUOTES} />
  );
};


export default AllQuotes;
