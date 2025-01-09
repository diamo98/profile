import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import style from './style.css';
import scholarData from '../../scholar_data.json';

const Publications = () => {
   const [publications, setPublications] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');

   useEffect(() => {
       setPublications(scholarData.articles || []);
   }, []);

   const filteredPublications = publications.filter(pub =>
       pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
       pub.publication.toLowerCase().includes(searchTerm.toLowerCase())
   );

   return (
       <div class={style.publications}>
           <h1>Publications</h1>
           <div class={style.searchContainer}>
               <input
                   type="text"
                   placeholder="Search publications..."
                   value={searchTerm}
                   onInput={(e) => setSearchTerm(e.target.value)}
                   class={style.searchInput}
               />
           </div>
           <ul class={style.publicationList}>
               {filteredPublications.map((pub, index) => (
                   <li key={index} class={style.publicationItem}>
                       <h2>{pub.title}</h2>
                       <p class={style.authors}>{pub.authors}</p>
                       <p class={style.publication}>{pub.publication}</p>
                       <p class={style.year}>Year: {pub.year}</p>
                       <p class={style.citations}>Citations: {pub.citations}</p>
                   </li>
               ))}
           </ul>
           {filteredPublications.length === 0 && (
               <p class={style.noResults}>No publications found matching your search.</p>
           )}
       </div>
   );
};

export default Publications;





