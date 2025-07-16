# Project02

This is project-02 for lede program.
<br>
Link to the project-02 (https://akiha1224.github.io/Project2/)
<br>

## Title

Schools facing Tsunami risk
<br>Measures for prevention

## Aim

The aim of this project is to visualize how many schools across Japan are at risk of tsunamis and what specific dangers they face, in order to highlight current challenges in evacuation systems and disaster preparedness. During the 2011 Great East Japan Earthquake, inadequate evacuation decisions and disaster planning led to devastating consequences. With a high probability of a massive Nankai Trough earthquake occurring in the coming decades, this project seeks to shed light on the risks schools currently face and to encourage greater preparedness to prevent similar tragedies.

## Findings

1. There are 3,531 schools across Japan that are at risk of tsunami-induced flooding, excluding Tokyo, Fukui, Kagawa, and inland prefectures that do not face the sea.
2. According to national estimates based on the damage caused by the Great East Japan Earthquake, it is believed that survival is unlikely if a person is caught in a tsunami of 1 meter or more. There are 2,189 schools where tsunamis of at least 1 meter in height are expected, and 31 schools where tsunami heights of over 10 meters are predicted.
3. There are 633 schools located in municipalities where a tsunami is expected to reach within 5 minutes after an earthquake occurs. (This figure includes schools where the estimated tsunami height is less than 1 meter.) In some cases, schools are in areas where a tsunami is predicted to arrive in just 2 minutes.

## Data

These are the sources for my data:

| What I plotted  | Data source |
| ------------- | ------------- |
| School Data | 2023 Edition of School Data from National Land Numerical Information |
| Tsunami Inundation Assumption Data | Tsunami Inundation Assumption (Version 2.1) from National Land Numerical Information |
| Estimated Tsunami Arrival Times for a Major Nankai Trough Earthquake (Maximum Scenario) | List of Estimated Tsunami Arrival Times by Municipality and Prefecture from the National Nankai Trough Earthquake Countermeasure Working Group |
| Assumed Source Area of a Major Nankai Trough Earthquake | Data from the National Research Institute for Earth Science and Disaster Resilience (J-SHIS: Japan Seismic Hazard Information Station) |
| Number of Teachers and Students Who Died in the Great East Japan Earthquake | 2023 MEXT White Paper on Education, Chapter 11: Progress in Recovery and Reconstruction from the Great East Japan Earthquake |
| Diagram of Tsunami Inundation Depths | “Guidelines for Setting Tsunami Inundation Assumptions” by the Ministry of Land, Infrastructure, Transport and Tourism (MLIT) |

## Data Collection Process

1. **School Data**
   Downloaded the 2023 edition (updated in June 2024) of the nationwide school dataset from the National Land Numerical Information. The data includes information such as location, administrative area code, school code, and school classification. In this context, "school" refers to institutions defined under the School Education Act of Japan, including kindergartens, elementary schools, junior high schools, compulsory education schools, high schools, secondary education schools, special needs schools, universities, technical colleges, vocational schools, and miscellaneous schools, as well as *certified kodomo-en* (combined childcare and education facilities) defined under the Act on the Promotion of Comprehensive Services related to Education and Childcare for Preschool Children.

2. **Tsunami Inundation Assumption Data**
   Downloaded the Version 2.1 dataset (updated in fiscal year 2022) from the National Land Numerical Information. Data from each prefecture was obtained in compliance with usage agreements for open or conditionally open data. The data is used as part of Columbia University's Lede Program.

3. **Estimated Tsunami Arrival Times in the Event of a Major Nankai Trough Earthquake**
   From the national “Working Group on Countermeasures for a Major Nankai Trough Earthquake,” the list of estimated tsunami arrival times by prefecture and municipality was referenced. From page 45 onward, the shortest time for a 1-meter tsunami to reach each location was extracted, and municipalities where the tsunami is expected to arrive within 5 minutes were identified.

4. **Assumed Source Region Data for a Major Nankai Trough Earthquake**
   Retrieved from the API provided by the National Research Institute for Earth Science and Disaster Resilience (J-SHIS: Japan Seismic Hazard Information Station).

5. **Seismic Intensity of the Great East Japan Earthquake**
   From the Japan Meteorological Agency’s observation and analysis data on the 2011 Great East Japan Earthquake, the highest seismic intensity observed in each prefecture was extracted.

## Data Analysis Process

### 1. Importing Data into QGIS

* Imported shapefiles of school locations and tsunami inundation assumptions into QGIS.

### 2. Overlaying Schools with Tsunami Inundation Areas

* Used the “Join attributes by location” function to extract schools located within the tsunami inundation zones.

### 3. Categorizing Schools by Inundation Depth

* Applied rule-based styling to categorize schools by inundation depth and saved each category as a separate layer. Depths were unified into five standardized categories:

  * 0.01–0.3m
  * 0.3–1.0m
  * 1.0–5.0m
  * 5.0–10.0m
  * Over 10.0m
* *Special handling*: Kyoto Prefecture (which had only a “4m or more” category) was excluded from the depth classification. Osaka, Hyogo, Hiroshima, Yamaguchi, and Kumamoto had a “5m or more” category, which was grouped into the 5.0–10.0m range.

### 4. Aggregating by Prefecture, Depth, and School Type

* Used the “Aggregate” function in QGIS to summarize the number of schools by inundation depth, school type, and prefecture.

### 5. Managing Data Size and Splitting Maps

* Due to large file sizes of GeoJSON and MBTiles, the country was divided into “Western Japan” and “Eastern Japan” for export and uploaded separately to Mapbox.

### 6. Filtering by Tsunami Arrival Time

* Extracted only the municipalities where a 1-meter tsunami is expected to arrive within 5 minutes and exported them as a separate layer.

### 7. Overlaying Seismic Intensity Data from the 2011 Earthquake

* Created a layer showing the maximum seismic intensity per prefecture during the 2011 Great East Japan Earthquake using data from the Japan Meteorological Agency, and overlaid it in QGIS.

### 8. Final Visualization in Mapbox

* Imported the QGIS-generated layers into Mapbox.
* Applied color styling based on tsunami depth and seismic intensity.
* The tsunami depth color scheme was based on the color reference on p.47 of the “Guidelines for Setting Tsunami Inundation Assumptions” by the Ministry of Land, Infrastructure, Transport and Tourism (MLIT).

## New Skills and Growth

1. Learned how to use QGIS to overlay shapefile data layers, perform spatial calculations, and join only the necessary parts of attribute tables.

2. Gained a deeper understanding of how to layer data in Mapbox and apply visual styling such as color schemes.

3. While using a scrollytelling template, I was able to experiment with how to present maps, layer visualizations, and control display elements creatively.

## Future Work
* While I conducted spatial analysis by overlaying layers in QGIS, I realized the need to verify conditions at individual schools.
* As mentioned earlier, when considering tsunami evacuation, examining the feasibility of **vertical evacuation** (i.e., evacuation to higher floors or rooftops) is essential. Further investigation is needed to determine whether the height and structure of school buildings are sufficient for safe evacuation before the tsunami arrives.
* Additionally, due to the lack of available data, I was not able to examine whether each school has a designated evacuation plan or route. Since the dataset includes school names, I would like to consider conducting direct interviews with individual schools in the future.
* This project only included prefectures for which tsunami inundation data is publicly available through the National Land Numerical Information. However, based on other news reports, it appears that Tokyo, Fukui, and Kagawa may have provided such data to media organizations. I hope to include these prefectures in future research.
* This project was also a valuable opportunity to improve my QGIS skills. However, I encountered challenges such as large file sizes during export. Moving forward, I aim to deepen my understanding of the trade-offs involved in reducing file size, such as potential loss of detail or accuracy.
* When the page is reloaded, all Mapbox layers are temporarily displayed at once, causing the map to appear cluttered for a moment. I have not yet identified the cause or how to resolve this issue, but I hope to address such detailed display problems in future improvements.


