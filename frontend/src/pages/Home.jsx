
import { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Workflow from '../components/Workflow'
import ProblemForm from '../components/ProblemForm'
import ReportSummary from '../components/ReportSummary'
import FeatureCards from '../components/FeatureCards'
import Footer from '../components/Footer'

function Home() {
  const [report, setReport] = useState(null)

  // receive the submitted report
  function handleReportSubmit(reportData) {
    setReport(reportData)
  }

  // scroll to the summary after submission
  useEffect(() => {
    if (report) {
      document.getElementById('report-summary')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }, [report])

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Workflow />

        <ProblemForm onReportSubmit={handleReportSubmit} />

        <ReportSummary report={report} />

        <FeatureCards />
      </main>

      <Footer />
    </>
  )
}

export default Home
