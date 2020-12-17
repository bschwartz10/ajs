import React from 'react'
import Layout from '../components/layout'
import Bio from '../components/Bio'

const OurPractice = () => {
  return (
    <Layout>
      <h1 className="text-3xl mb-2 text-blue-900">Our Practice</h1>
      <h2 className="text-xl text-blue-400">Meet The Doctor</h2>
      <Bio
        image="https://via.placeholder.com/375x250"
        name="Dr. Alan Schwartz"
        title="Dentist"
        blurb="Dr. Alan J. Schwartz earned his undergraduate degree at the State University of New York at Binghamton in 1980
        and his dental degree (DDS) at the State University of New York at Buffalo in 1985."
        expandedText="He furthered his clinical skills by completing a general practice residency at Peninsula General Hospital in Far Rockaway, NY. Regularly
        attending continuing education courses enables Dr. Schwartz to stay at the forefront of modern dentistry. Combining superior skills, with state-of-the-art technology, Dr. Schwartz offers his patients the most
        sophisticated and advanced dentistry available today. Dr. Schwartz has been practicing dentistry in Kew Gardens Hills, NY since 1989, and Oceanside, NY since 2009.
        Creating and maintaining his patients’ optimal oral health, in his state of the art dental office, is his number
        one priority. Dr. Schwartz is a member of the American Dental Association, New York State Dental Association,
        Queens County Dental Society and Peninsula Hospital Dental Society and Nassau County Dental Society."
      />
      <h2 className="text-xl text-gray-500">Meet The Staff</h2>
      <Bio
        image="https://via.placeholder.com/375x250"
        name="April"
        title="Office Manager"
        blurb="April Schwartz has been married to Dr. Alan J. Schwartz since 1985. They met while undergraduate students at
        SUNY Binghamton. April began working part-time when their youngest son began school and is now the office
        manager. Being able to provide a warm and friendly atmosphere, educating patients on the latest dental
        techniques, and serving as the liaison between patients, insurance companies and outside financing companies are
        some of the responsibilities she most enjoys. “My goal is to create an environment in which our patients will
        feel comfortable and well cared for while receiving the best dentistry available today,” says April."
      />
      <Bio
        image="https://via.placeholder.com/375x250"
        name="Sherry"
        title="Dental Assistant"
        blurb="Sherry is the practice’s Dental Assistant in our Oceanside office. She has been in the dental field since 1990, with experience in both the clinical and administrative aspects of dentistry. She is so pleased to be an integral part of Dr. Schwartz’s technologically advanced and caring practice. When not working at the best dental office in Oceanside, Sherry can be found in her garden or on a tennis court."
      />
      <Bio
        image="https://via.placeholder.com/375x250"
        name="Euridiss"
        title="Hygienist"
        blurb="Euridiss earned her Dental Hygiene degree from Hostos Community College in 2009. She is currently at Farmingdale State College obtaining her Bachelors of Science with a special interest in periodontal disease. Euridiss belongs to several dental hygiene groups that meet 3-4 times a year to learn about the latest advances in oral health. She enjoys getting to know her patients individually so she can provide them with high quality care. On her off time Euridiss enjoys reading, traveling with her family and spending time with her dog Hadley."
      />
    </Layout>
  )
}

export default OurPractice
