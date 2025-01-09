import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import style from './style.css';

const GoogleScholarScraper = () => {
  const [scholarData, setScholarData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [serverUrl, setServerUrl] = useState('http://localhost:3000');

  useEffect(() => {
    fetchScholarData();
  }, []);

  const fetchScholarData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${serverUrl}/api/get-scholar-data`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.error}`);
      }
      const data = await response.json();
      if (Object.keys(data).length === 0) {
        setError('No data available. Please scrape Google Scholar first.');
      } else {
        setScholarData(data);
      }
    } catch (error) {
      console.error('Error fetching Google Scholar data:', error);
      setError(`Failed to fetch Google Scholar data: ${error.message}`);
    }
    setIsLoading(false);
  };

  const handleScrape = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${serverUrl}/api/scrape-google-scholar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.error}`);
      }
      const data = await response.json();
      setScholarData(data);
    } catch (error) {
      console.error('Error scraping Google Scholar:', error);
      setError(`Failed to scrape Google Scholar: ${error.message}`);
    }
    setIsLoading(false);
  };

  return (
    <div class={style.scraperContainer}>
      <h2>Google Scholar Data</h2>
      <button onClick={handleScrape} disabled={isLoading} class={style.scrapeButton}>
        {isLoading ? 'Updating...' : 'Update Google Scholar Data'}
      </button>
      <button onClick={fetchScholarData} disabled={isLoading} class={style.refreshButton}>
        Refresh Data from File
      </button>
      {error && <div class={style.error}>{error}</div>}
      {isLoading && <div class={style.loading}>Loading... This may take a few minutes.</div>}
      {scholarData && (
        <div class={style.result}>
          <h3>Scholar Data:</h3>
          <p>Name: {scholarData.name}</p>
          <p>Affiliation: {scholarData.affiliation}</p>
          <p>H-index: {scholarData.hIndex}</p>
          <p>i10-index: {scholarData.i10Index}</p>
          <p>Total Citations: {scholarData.citations}</p>
          <p>Last Updated: {new Date(scholarData.lastUpdated).toLocaleString()}</p>
          <h4>Articles ({scholarData.articles?.length || 0}):</h4>
          <ul>
            {scholarData.articles?.map((article, index) => (
              <li key={index}>
                <strong>{article.title}</strong>
                <br />
                {article.authors}
                <br />
                {article.publication} ({article.year})
                <br />
                Citations: {article.citations}
              </li>
            )) || <li>No articles available</li>}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GoogleScholarScraper;

















