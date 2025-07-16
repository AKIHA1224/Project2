var config = {
    style: 'mapbox://styles/akiha/cmd3hcgz4000101sa7iuweyzn',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYWtpaGEiLCJhIjoiY21iem1ydnN0MjN2MDJpcHdvZnZ6bHVlYSJ9.hJ3dwzCViC6JE8lhnIDiGA',
    //showMarkers: true,
    //markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Schools facing Tsunami risk<br>Measures for prevention',
    subtitle: 'July 2025',
    byline: 'By Akiha Komatsu',
    footer: '<br><small><em></em></small>Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.<br>My GitHub<a href="https://github.com/your-repo-link" target="_blank"><img src="image/github-mark.png" alt="GitHub" style="height: 20px; vertical-align: middle; margin-left: 8px;"></a>',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'center',
            hidden: false,
            title: 'The Great East Japan Earthquake',
            image: '',
            description: 'On March 11, 2011, the Great East Japan Earthquake — a devastating disaster that struck Japan with a maximum seismic intensity of 7 — claimed the lives of 659 children, students, and school staff.',
            location: {
                center: [135.5, 34.7],
                zoom: 3.5,
                pitch: 0,
                bearing: 0
            },
            callback: '',
            onChapterEnter: [
                {
                layer: 'higashinihon',
                opacity: 1,
                duration: 500,
                 },
                {
                layer: 'nannkai',
                opacity: 0,
                 },
                {
                layer: 'epicenter-2011',
                opacity: 1,
                },
                {
                layer: 'flood-area-west',
                opacity: 0,
                },
                {
                layer: 'flood-area-east',
                opacity: 0,
                },
                {
                layer: 'schools-lozoom',
                opacity: 0,
                },
                {
                layer: 'tsunami1m5m',
                opacity: 0,
                },
                {
                layer: '1m',
                opacity: 0,
                },
                {
                layer: '10m',
                opacity: 0,
                },
                {
                layer: 'yaizutosa',
                opacity: 0,
                },
                 {
                layer: 'japan',
                opacity: 0,
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'The Great East Japan Earthquake',
            image: 'image/okawa_elementary_school.jpg',
            description: '<small><em>Photo: Okawa Elementary School, Preserved as a Memorial to the Earthquake Disaster (TBS NEWS DIG)</em></small><br><br>At Okawa Elementary School in Ishinomaki City, Miyagi Prefecturea delayed decision to evacuate led students and staff to remain in the schoolyard for approximately 50 minutes after the earthquake. As a result, 84 people lost their lives in the tsunami, and four students remain missing. The lawsuit filed by bereaved families against the local government and others resulted in the first court ruling that ordered compensation on the grounds of inadequate disaster preparedness before the earthquake.',
            location: {
                center: [140.88211, 38.26036],
                zoom: 5.3,
                pitch: 32.5,
                bearing: -7.2,
                speed: 0.6,
                curve: 1.5
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [
                {
                layer: 'higashinihon',
                opacity: 1,
                duration: 0,
                 },
                {
                layer: 'nannkai',
                opacity: 0,
                 },
                {
                layer: 'epicenter-2011',
                opacity: 1,
                },
                {
                layer: 'flood-area-west',
                opacity: 0,
                },
                {
                layer: 'flood-area-east',
                opacity: 0,
                },
                {
                layer: 'schools-lozoom',
                opacity: 0,
                },
                {
                layer: 'tsunami1m5m',
                opacity: 0,
                },
                {
                layer: '1m',
                opacity: 0,
                },
                {
                layer: '10m',
                opacity: 0,
                },
                {
                layer: 'yaizutosa',
                opacity: 0,
                },
                 {
                layer: 'japan',
                opacity: 0,
                }
            ],
            onChapterExit: [
                     {
                layer: 'higashinihon',
                opacity: 0,
                duration: 500,
                 }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: '<span style="color: rgb(77, 204, 255);">Nankai Trough</span> Megaquake',
            image: '',
            description: 'In Japan, there is an estimated 80% probability that a massive Nankai Trough earthquake with a magnitude of 8 to 9 will occur within the next 30&nbsp;years. To prevent the same tragedy from happening again, we take a closer look at the tsunami-related flood risks faced by schools.',
             location: {
                center: [134.45, 33.6],
                zoom: 5.0,
                pitch: 32.5,
                bearing: -15,
                speed: 0.6,
                curve: 1.5
            },
            onChapterEnter: [
              {
                layer: 'higashinihon',
                opacity: 0,
                 },
                {
                layer: 'nannkai',
                opacity: 0.57,
                 },
                {
                layer: 'epicenter-2011',
                opacity: 0,
                },
                {
                layer: 'flood-area-west',
                opacity: 0,
                },
                {
                layer: 'flood-area-east',
                opacity: 0,
                },
                {
                layer: 'schools-lozoom',
                opacity: 0,
                },
                {
                layer: 'tsunami1m5m',
                opacity: 0,
                },
                {
                layer: '1m',
                opacity: 0,
                },
                {
                layer: '10m',
                opacity: 0,
                },
                {
                layer: 'yaizutosa',
                opacity: 0,
                },
                {
                layer: 'japan',
                opacity: 1,
                }
            ],
            onChapterExit: [
                {
                layer: 'japan',
                opacity: 0,
                duration: 500
                }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Schools at Risk of <span style="color: rgb(0, 153, 255);">Tsunami</span> Inundation</span>',
            image: '',
            description: `Using school data from the National Land Numerical Information, we assessed the tsunami flood risk for 56,807 schools across Japan.<br><br>
By applying GIS (Geographic Information System) techniques, we overlaid the geographic coordinates of each school with official tsunami inundation assumption zones to identify which schools fall within potential flood areas.<br><br>

<span onclick="this.nextElementSibling.style.display = (this.nextElementSibling.style.display === 'none' ? 'inline' : 'none');"
      style="text-decoration: underline dotted; cursor: pointer; color: #007acc;">
  ⚠️ Note
</span>
<span style="display: none; color: #ffffff; font-size: 0.9em;">
  <br><em>The data used for the calculations is based on the 2023 edition of the National Land Numerical Information school data and version 2.1 of the tsunami inundation assumption data. (Excludes Tokyo, Fukui, and Kagawa prefectures, as well as landlocked ones.) Actual tsunami flooding may exceed these assumptions.
</em></span>
`,
            location: {
                center: [135.5, 34.7],
                zoom: 4.0,
                pitch: 0,
                bearing: 0,
                speed: 0.6,
                curve: 1.5
            },
            onChapterEnter: [
                {
                layer: 'higashinihon',
                opacity: 0,
              },
                {
                layer: 'nannkai',
                opacity: 0,
                 },
                {
                layer: 'epicenter-2011',
                opacity: 0,
                },
                {
                layer: 'flood-area-west',
                opacity: 1,
                },
                {
                layer: 'flood-area-east',
                opacity: 1,
                },
                {
                layer: 'schools-lozoom',
                opacity: 0,
                },
                {
                layer: 'tsunami1m5m',
                opacity: 0,
                },
                {
                layer: '1m',
                opacity: 0,
                },
                {
                layer: '10m',
                opacity: 0,
                },
                {
                layer: 'yaizutosa',
                opacity: 0,
                },
                {
                layer: 'japan',
                opacity: 0,
                }
            ],
            onChapterExit: []
        },
        {
            id: 'fifth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Tsunami risk <br>identified at  <span style="color: rgb(255, 31, 31);">3,531&nbsp;schools</span> ',
            image: '',
            description: 'As a result, 3,531&nbsp;schools across the country were found to be located within designated tsunami inundation zones.',
             location: {
                center: [135.5, 34.7],
                zoom: 4.0,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
              {
                layer: 'higashinihon',
                opacity: 0,
                 },
                {
                layer: 'nannkai',
                opacity: 0,
                 },
                {
                layer: 'epicenter-2011',
                opacity: 0,
                },
                {
                layer: 'flood-area-west',
                opacity: 1,
                },
                {
                layer: 'flood-area-east',
                opacity: 1,
                },
                {
                layer: 'schools-lozoom',
                opacity: 1,
                duration: 500,
                },
                {
                layer: 'tsunami1m5m',
                opacity: 0,
                },
                {
                layer: '1m',
                opacity: 0,
                },
                {
                layer: '10m',
                opacity: 0,
                },
                {
                layer: 'yaizutosa',
                opacity: 0,
                },
                 {
                layer: 'japan',
                opacity: 0,
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'six-identifier',
            alignment: 'center',
            hidden: false,
            title: '',
            image: 'image/MLIT.jpg',
            description: '<small><em>image:Guidelines for Setting Tsunami Inundation Assumptions – Ministry of Land, Infrastructure, Transport and Tourism (MLIT)</em></small><p style="background-color: rgba(255, 77, 77, 0.15); padding: 1em; border-left: 5px solid rgb(255, 77, 77); font-weight: bold;"><span style="color: rgb(255, 77, 77); font-size: 1.2em;">⚠️ Critical Warning:</span><br>When tsunami waves reach a height of <span style="color: rgb(77, 204, 255); font-weight: bold;">1&nbsp;meter</span>, it is believed that survival is unlikely for those caught in them.<br>According to national estimates, fatalities begin to occur at an inundation depth of <span style="color: rgb(77, 204, 255); font-weight: bold;">30&nbsp;cm</span>, and at <span style="color: rgb(77, 204, 255); font-weight: bold;">1&nbsp;meter</span>, most people are expected to lose their lives.<br><span style="text-decoration: underline; font-style: italic;">Evacuation before the tsunami arrives is essential.</span></p>',
            location: {
                center: [135.5, 34.7],
                zoom: 4.0,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                layer: 'higashinihon',
                opacity: 0,
                duration: 0
                 },
                {
                layer: 'nannkai',
                opacity: 0,
                 },
                {
                layer: 'epicenter-2011',
                opacity: 0,
                },
                {
                layer: 'flood-area-west',
                opacity: 1,
                },
                {
                layer: 'flood-area-east',
                opacity: 1,
                },
                {
                layer: 'schools-lozoom',
                opacity: 1,
                },
                {
                layer: 'tsunami1m5m',
                opacity: 0,
                },
                {
                layer: '1m',
                opacity: 0,
                },
                {
                layer: '10m',
                opacity: 0,
                }
            ],
            onChapterExit: [
                     {
                layer: 'higashinihon',
                opacity: 0,
                 },
                {
                layer: 'yaizutosa',
                opacity: 0,
                },
                 {
                layer: 'japan',
                opacity: 0,
                }
            ]
        },
        {
            id: 'seven-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'image/Schools_by_flood_depth.png',
            description: 'Of the 3,521&nbsp;schools located in tsunami inundation zones, approximately 60% — or <span style="color: rgb(255,216,192);">2,189&nbsp;schools</span> — are expected to experience flooding of 1&nbsp;meter or more.',
            location: {
                center: [135.5, 34.7],
                zoom: 4.0,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                                {
                layer: 'higashinihon',
                opacity: 0,
                duration: 0
                 },
                {
                layer: 'nannkai',
                opacity: 0,
                 },
                {
                layer: 'epicenter-2011',
                opacity: 0,
                },
                {
                layer: 'flood-area-west',
                opacity: 1,
                },
                {
                layer: 'flood-area-east',
                opacity: 1,
                },
                {
                layer: 'schools-lozoom',
                opacity: 0,
                },
                {
                layer: '1m',
                opacity: 1,
                duration: 500,
                },
                {
                layer: 'tsunami1m5m',
                opacity: 0,
                },
                {
                layer: '10m',
                opacity: 0,
                },
                {
                layer: 'yaizutosa',
                opacity: 0,
                },
            ],
            onChapterExit: [
                     {
                layer: 'higashinihon',
                opacity: 0,
                 },
                 {
                layer: 'japan',
                opacity: 0,
                 },
                 {
                layer: '1m',
                opacity: 0,
                duration: 500,
                }
            ]
        },
                {
            id: 'eight-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'In addition, <span style="color: rgb(242,133,201);">31&nbsp;schools</span> are located in areas where flood depths of over 10 meters are expected.',
            location: {
                center: [135.5, 34.7],
                zoom: 4.0,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                                {
                layer: 'higashinihon',
                opacity: 0,
                duration: 0
                 },
                {
                layer: 'nannkai',
                opacity: 0,
                 },
                {
                layer: 'epicenter-2011',
                opacity: 0,
                },
                {
                layer: 'flood-area-west',
                opacity: 1,
                },
                {
                layer: 'flood-area-east',
                opacity: 1,
                },
                {
                layer: 'schools-lozoom',
                opacity: 0,
                },
                {
                layer: '1m',
                opacity: 0,
                },
                {
                layer: 'tsunami1m5m',
                opacity: 0,
                },
                {
                layer: '10m',
                opacity: 1,
                duration: 500,
                },                
                {
                layer: 'yaizutosa',
                opacity: 0,
                },
             {
                layer: 'japan',
                opacity: 0,
                 },
            ],
            onChapterExit: [
                     {
                layer: 'higashinihon',
                opacity: 0,
                 },
                 {
                layer: 'japan',
                opacity: 0,
                },
               {
                layer: '10m',
                opacity: 0,
                duration: 500,
                }, 
            ]
        },{
            id: 'ten-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'There are 633&nbsp;schools located in municipalities where tsunami waves of 1&nbsp;meter or more are expected to <span style="color: rgb(0, 153, 255);"><em>arrive within 5&nbsp;minutes</em></span> after an earthquake.<br>(This number includes schools where the expected tsunami height is less than 1&nbsp;meter as well.)',
            location: {
                center: [138.323, 34.850],  
                zoom: 8.5,
                pitch: 50,
                bearing: -45
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [
                                {
                layer: 'higashinihon',
                opacity: 0,
                duration: 0
                 },
                {
                layer: 'nannkai',
                opacity: 0,
                 },
                {
                layer: 'epicenter-2011',
                opacity: 0,
                },
                {
                layer: 'flood-area-west',
                opacity: 1,
                },
                {
                layer: 'flood-area-east',
                opacity: 1,
                },
                {
                layer: 'schools-lozoom',
                opacity: 1,
                },
                {
                layer: 'tsunami1m5m',
                opacity: 0.57,
                duration: 1000,
                },
                {
                layer: '1m',
                opacity: 0,
                },
                {
                layer: '10m',
                opacity: 0,
                },
                {
                layer: 'yaizutosa',
                opacity: 0,
                },
                 {
                layer: 'japan',
                opacity: 0,
                }
            ],
            onChapterExit: [
                {
                layer: 'tsunami1m5m',
                opacity: 0.57,
                duration: 500,
                }
            ]
        },
        {
            id: 'eleven-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Yaizu City, Shizuoka Prefecture',
            image: '',
            description: 'A tsunami of over 1&nbsp;meter is expected to arrive in just <span style="color: rgb(0, 153, 255);"><em>2&nbsp;minutes.</em></span>This includes 3&nbsp;kindergartens.According to their websites, evacuation sites are set as the rooftop of the kindergarten or nearby apartment buildings. Some of the kindergartens also conduct evacuation drills.',
            location: {
                center: [138.323, 34.850], 
                zoom: 11,
                pitch: 50,
                bearing: -45
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [
                                {
                layer: 'higashinihon',
                opacity: 0,
                duration: 0
                 },
                {
                layer: 'nannkai',
                opacity: 0,
                 },
                {
                layer: 'epicenter-2011',
                opacity: 0,
                },
                {
                layer: 'flood-area-west',
                opacity: 1,
                },
                {
                layer: 'flood-area-east',
                opacity: 1,
                },
                {
                layer: 'schools-lozoom',
                opacity: 1,
                },
                {
                layer: 'tsunami1m5m',
                opacity: 0,
                },
                {
                layer: '1m',
                opacity: 0,
                },
                {
                layer: '10m',
                opacity: 0,
                },
                {
                layer: 'yaizutosa',
                opacity: 0.57,
                duration: 500,
                },
                 {
                layer: 'japan',
                opacity: 0,
                }
            ],
            onChapterExit: [
            ]
        },        
        {
            id: 'twelve-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Tosashimizu City, Kochi Prefecture',
            image: '',
            description: 'In Tosashimizu City, a tsunami is expected to arrive in just <span style="color: rgb(0, 153, 255);"><em>4&nbsp;minutes.</em></span> This includes 3&nbsp;elementary schools, where tsunami waves of 10&nbsp;to&nbsp;15&nbsp;meters are predicted.',
            location: {
                center: [132.955, 32.783],  
                zoom: 11,
                pitch: 50,
                bearing: -45
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [
                                {
                layer: 'higashinihon',
                opacity: 0,
                duration: 0
                 },
                {
                layer: 'nannkai',
                opacity: 0,
                 },
                {
                layer: 'epicenter-2011',
                opacity: 0,
                },
                {
                layer: 'flood-area-west',
                opacity: 1,
                },
                {
                layer: 'flood-area-east',
                opacity: 1,
                },
                {
                layer: 'schools-lozoom',
                opacity: 1,
                },
                {
                layer: 'tsunami1m5m',
                opacity: 0,
                },
                {
                layer: '1m',
                opacity: 0,
                },
                {
                layer: '10m',
                opacity: 0,
                },
                {
                layer: 'yaizutosa',
                opacity: 0.57,
                },
                 {
                layer: 'japan',
                opacity: 0,
                }
            ],
            onChapterExit: [
                {
                layer: 'yaizutosa',
                opacity: 0.57,
                duration: 500,
                },
            ]
        },{
            id: 'last',
            alignment: 'center',
            hidden: false,
            title: 'Before the Wave Comes: What You Can Do Now',
            image: '',
            description: 'To protect lives from tsunamis, it is essential to evacuate either horizontally — to a distant, elevated, and safe location — or vertically, by moving to a higher floor within a sturdy building.This analysis does not examine whether vertical evacuation is feasible at each school, and this remains an important issue for future investigation.<br><br>Moreover, we must not forget that tsunamis may exceed the expected inundation zones and heights, posing risks even to areas thought to be safe.To safeguard lives, it is crucial to develop evacuation plans and conduct regular drills in advance, as part of everyday preparedness.',
            location: {
                center: [135.5, 34.7],
                zoom: 3.5,
                pitch: 0,
                bearing: 0
            },
            callback: '',
            onChapterEnter: [
                {
                layer: 'higashinihon',
                opacity: 0,
                duration: 0
                 },
                {
                layer: 'nannkai',
                opacity: 0,
                 },
                {
                layer: 'epicenter-2011',
                opacity: 0,
                },
                {
                layer: 'flood-area-west',
                opacity: 1,
                },
                {
                layer: 'flood-area-east',
                opacity: 1,
                },
                {
                layer: 'schools-lozoom',
                opacity: 1,
                },
                {
                layer: 'tsunami1m5m',
                opacity: 0,
                },
                {
                layer: '1m',
                opacity: 0,
                },
                {
                layer: '10m',
                opacity: 0,
                },
                {
                layer: 'yaizutosa',
                opacity: 0,
                },
                 {
                layer: 'japan',
                opacity: 0,
                }
            ],
            onChapterExit: [
            ]
        },
    ]
};
