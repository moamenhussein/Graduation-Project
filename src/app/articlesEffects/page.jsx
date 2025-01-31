"use client";

import Banner from "@/Components/banner/Banner";

export default function VaccinationArticles() {
  return(
    <div className="medical">
      <Banner
        heading="مقالات عن الاعراض الجانبيه"
        btnOne="اساسيه"
        btnTwo="إضافية"
      />
    </div>
  )
}