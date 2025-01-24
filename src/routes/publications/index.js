import { h } from "preact"
import { useState, useEffect } from "preact/hooks"
import style from "./style.css"
import scholarData from "../../scholar_data.json"

const Publications = () => {
  const [publications, setPublications] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [articleFilter, setArticleFilter] = useState("all")
  const [citationSort, setCitationSort] = useState("none")
  const [yearFilter, setYearFilter] = useState("none")

  useEffect(() => {
    setPublications(scholarData.articles || [])
  }, [])

  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  const filteredAndSortedPublications = publications
    .filter((pub) => {
      const matchesSearch = pub.publication.toLowerCase().includes(searchTerm.toLowerCase())

      if (articleFilter === "all") return matchesSearch
      if (articleFilter === "articles") {
        return (
          matchesSearch &&
          ["annals", "journal", "transactions", "access"].some((term) => pub.publication.toLowerCase().includes(term))
        )
      }
      if (articleFilter === "conferences") {
        return (
          matchesSearch &&
          ["conference", "workshop", "symposium", "summit"].some((term) => pub.publication.toLowerCase().includes(term))
        )
      }
      if (articleFilter === "bookChapter") {
        return matchesSearch && pub.publication.toLowerCase().includes("wiley")
      }
      if (articleFilter === "preprints") {
        return (
          matchesSearch &&
          ["arxiv", "authorea", "preprint", "preprints"].some((term) => pub.publication.toLowerCase().includes(term))
        )
      }
      return false
    })
    .filter((pub) => {
      if (yearFilter === "none") return true
      if (yearFilter === "lastYear") {
        return pub.year >= currentYear - 2
      }
      if (yearFilter === "last5Years") {
        return pub.year >= currentYear - 6
      }
      return true
    })
    .sort((a, b) => {
      if (citationSort === "mostCited") return b.citations - a.citations
      if (citationSort === "leastCited") return a.citations - b.citations
      if (yearFilter === "newest") return b.year - a.year
      if (yearFilter === "oldest") return a.year - b.year
      return 0
    })

  return (
    <div class={style.publications}>
      <h1>Publications</h1>
      <div class={style.filters}>
        <div class={style.filterGroup}>
          <label htmlFor="articleFilter">Articles:</label>
          <select id="articleFilter" value={articleFilter} onChange={(e) => setArticleFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="articles">Journals</option>
            <option value="conferences">Conferences</option>
            <option value="bookChapter">Book Chapters</option>
            <option value="preprints">Preprints</option>
          </select>
        </div>
        <div class={style.filterGroup}>
          <label htmlFor="citationSort">Citations:</label>
          <select id="citationSort" value={citationSort} onChange={(e) => setCitationSort(e.target.value)}>
            <option value="none">No Sort</option>
            <option value="mostCited">Most Cited First</option>
            <option value="leastCited">Least Cited First</option>
          </select>
        </div>
        <div class={style.filterGroup}>
          <label htmlFor="yearFilter">Year:</label>
          <select id="yearFilter" value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}>
            <option value="none">All Years</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="lastYear">Last 2 Years</option>
            <option value="last5Years">Last 6 Years</option>
          </select>
        </div>
      </div>
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
        {filteredAndSortedPublications.map((pub, index) => (
          <li key={index} class={style.publicationItem}>
            <a href={pub.link} target="_blank" rel="noopener noreferrer" class={style.publicationLink}>
              <h2>{pub.title}</h2>
              <p class={style.authors}>{pub.authors}</p>
              <p class={style.publication}>{pub.publication}</p>
              <p class={style.year}>Year: {pub.year}</p>
              <p class={style.citations}>Citations: {pub.citations}</p>
            </a>
          </li>
        ))}
      </ul>
      {filteredAndSortedPublications.length === 0 && (
        <p class={style.noResults}>No publications found matching your search.</p>
      )}
    </div>
  )
}

export default Publications

















