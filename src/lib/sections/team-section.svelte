<script>
	import SectionHeader from '../section-header.svelte';
	import viewport from '../useViewportAction';
	import { browser } from '$app/environment';
	import gsap from 'gsap';
	import SplitType from 'split-type';

	const members = [
		{
			role: 'Founder',
			firstname: 'Temuulen',
			lastname: 'Olonbayar',
			image: '/images/members/temuulen.jpeg',
			bio: null,
			current: [
				{
					title: 'Founder & Director',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2022',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Corporate strategist/planner',
					organization: '新明工業株式会社',
					date: null,
					location: 'Japan'
				}
			],
			expierences: [
				{
					title: 'Teaching assistant',
					organization: '名古屋大学・大学院工学研究科',
					date: null,
					location: 'Japan'
				},
				{
					title: 'Research assistant',
					organization: '名古屋大学・経済学研究科',
					date: null,
					location: 'Japan'
				}
			],
			educations: [
				{
					title: '修士号',
					organization: '経済学研究科、名古屋大学',
					date: null,
					location: 'Nagoya, Japan'
				},
				{
					title: '学士号',
					organization: '経済学科、経済学部、名古屋大学',
					date: null,
					location: 'Nagoya, Japan'
				}
			],
			projects: [
				'Monte-carlo Tree-Search Algorithm Based Chess AI',
				'Reinforcement Learning based Portfolio Optimization AI',
				'Deep Reinforcement Learning model to predict precious metal auction prices'
			],
			achievements: [
				'2012 Bayanzurkh District Chess Tournament, 3rd place',
				'2013 White Queen Chess tournament, 2nd place',
				'2013 U-16 Open Chess Tournament "Best Game" prize',
				'2015-2019 名古屋大学グローバル３０奨学金, 日本',
				'2015-2019 EJU-JASSO奨学金、日本',
				'2015 全国大学チェス部夏合宿・ブリッツチェス大会２位',
				'2019 文部科学省奨学金、日本',
				'2019 名古屋大学経済学部代表卒業、日本'
			]
		},
		{
			role: 'CEO',
			firstname: 'Lkhagvasuren',
			lastname: 'Jazag',
			image: '/images/members/lkhagvasuren.jpeg',
			bio: null,
			current: [
				{
					title: 'Chief Executive Officer',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2022',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'Founder & President',
					organization: 'Bagshiin Tuslah LLC',
					date: null,
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Chairman',
					organization: 'Supernova LLC',
					date: null,
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Founder & President',
					organization: 'Yokozunanet LLC',
					date: null,
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'President',
					organization: 'Newcom Systems LLC',
					date: null,
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'システムエンジニア',
					organization: '野村総合研究所、SIer、日本',
					date: null,
					location: 'Japan'
				}
			],
			educations: [
				{
					title: 'MBA',
					organization: '経営アカデミー、モンゴル',
					date: null,
					location: 'Mongolia'
				},
				{
					title: '修士号',
					organization: '新領域創成科学研究科、東京大学',
					date: null,
					location: 'Tokyo, Japan'
				},
				{
					title: '学士号',
					organization: '電気電子工学科、工学部、東京大学',
					date: null,
					location: 'Tokyo, Japan'
				}
			],
			projects: [],
			achievements: [
				'1995 文部科学省奨学金、日本',
				'1992 モンゴル国物理オリンピアード１位',
				'1992 モンゴル国数学オリンピアード３位'
			]
		},
		{
			role: 'CTO',
			firstname: 'Amgalan',
			lastname: 'Ganbat',
			image: '/images/members/amgalan.jpeg',
			bio: null,
			current: [
				{
					title: 'CTO',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2024',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'CTO',
					organization: 'addice co., Ltd.',
					date: '2019 - 2024',
					location: 'Tokyo, Japan'
				},
				{
					title: 'CTO',
					organization: 'Dentsu Data-Artist Mongol',
					date: '2018-2019',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Data engineer',
					organization: 'Freelance',
					date: '2016-2018',
					location: 'London, UK'
				},
				{
					title: 'System engineer',
					organization: 'IBM Japan',
					date: '2014-2016',
					location: 'Tokyo, Japan'
				}
			],
			educations: [
				{
					title: 'Master in Information and Communication Engineering',
					organization: 'The University of Tokyo',
					date: '2012-2014',
					location: 'Tokyo, Japan'
				},
				{
					title: 'Bachelor in Electronics and Communication Engineering',
					organization: 'The University of Tokyo',
					date: '2008-2012',
					location: 'Tokyo, Japan'
				}
			],
			projects: [],
			achievements: []
		},
		{
			role: 'Consultant',
			firstname: 'Otgonbayar',
			lastname: 'Uuye',
			image: '/images/members/otgonbayar.jpeg',
			bio: null,
			current: [
				{
					title: 'Consultant',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2023',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Director of AI',
					organization: 'And Global Pte. Ltd',
					date: 'Since 2016',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Board member',
					organization: 'Mongolian Mathematical Society',
					date: 'Since 2019',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Board member',
					organization: 'Mongolian Mathematical Olympiad Committee',
					date: 'Since 2016',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'Director',
					organization: 'Institute of Mathematics, National University of Mongolia',
					date: '2016-2019',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'President',
					organization: 'Mongolian Mathematical Society',
					date: '2016-2019',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Associate Professor',
					organization: 'Department of Mathematics, National University of Mongolia',
					date: '2014-2017',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Research Associate & EPSRC postdoctoral fellow',
					organization: 'School of Mathematics, Cardiff University',
					date: '2011-2014',
					location: 'Cardiff, UK'
				},
				{
					title: 'Postdoctoral Researcher',
					organization: 'Department of Mathematical Sciences, University of Copenhagen',
					date: '2008-2011',
					location: 'Copenhagen, Denmark'
				}
			],
			educations: [
				{
					title: 'Ph.D. in Mathematics',
					organization: 'Pennsylvania State University',
					date: '2004-2008',
					location: 'Pennsylvania, USA'
				},
				{
					title: 'M.Sc. in Mathematics',
					organization: 'University of Tokyo',
					date: '2002-2004',
					location: 'Tokyo, Japan'
				},
				{
					title: 'B.Sc. in Mathematics',
					organization: 'University of Tokyo',
					date: '1998-2002',
					location: 'Tokyo, Japan'
				}
			],
			projects: [
				'Deep Learning UB',
				'New Mongol Institute of Technology',
				'Credit scoring',
				'e‐KYC',
				'Recommendation engine'
			],
			achievements: [
				'2019‐2020 GCRF Grant, EPSRC (Co‐I), UK',
				'2017‐2019 Advanced Research Grant (PI), Mongolian Science and Technology Foundation, Mongolia',
				'2016 TWAS prize for Young Scientists in Developing Countries',
				'2014‐2015 Advanced Research Grant, National University of Mongolia, Mongolia',
				'2011‐2014 EPSRC Postdoctoral Research Fellowship (PI), UK',
				'2006 Robert and Betsy Wilson Scholarship, US',
				'2005 MASS Teaching Award, US',
				'2005‐2007 JSPS Research Fellowship for Young Scientists, Japan',
				'2004 Nissho‐Iwai Foundation Scholarship, Japan',
				'2004 Vollmer‐Kleckner Fellowship, US',
				'2004 Graduate Scholars Fellowship, US',
				'1997‐2004 Japanese Government Scholarship, Japan',
				'1995 First Place, National Undergraduate Programming Olympiad, Mongolia',
				'1995 First Place, National Mathematics Olympiad for University Students and Teachers, Mongolia',
				'1994 Silver medal, International Mathematics Olympiad, Mongolia',
				'1992‐1994 Bronze, Silver and Gold medals, National Mathematics Olympiad, Mongolia',
				'1993‐1994 Silver and Gold medals, National Programming Olympiad, Mongolia'
			]
		},
		{
			role: 'Consultant',
			firstname: 'Bayarpurev',
			lastname: 'Mongol',
			image: '/images/members/bayarpurev.jpeg',
			bio: null,
			current: [
				{
					title: 'Consultant',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2023',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Associate Professor',
					organization:
						'Professor, Department of Electronics and Communications Technology, School of Engineering and Applied Sciences, National University of Mongolia',
					date: 'Since 2010',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'CEO',
					organization: 'Invescore AI Lab LLC',
					date: '2018-2022',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'CEO',
					organization: 'Khairkhan Semiconductors LLC',
					date: '2014-2018',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Research Associate',
					organization:
						'Nagoya University, the Graduate School of Engineering, Department of Electrical Engineering and Computer Science',
					date: '2009-2010',
					location: 'Nagoya, Japan'
				},
				{
					title: 'MON-4 Project',
					organization: 'Sky C and C LLC',
					date: '2002-2003',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: '',
					organization: 'Mongolia Telecom LLC',
					date: '1999-2002',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			educations: [
				{
					title: 'B.Sc.',
					organization: 'Faculty of Physics and Electronics, National University of Mongolia',
					date: '1994-1999',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Language course',
					organization: 'Nagoya University',
					date: '2003-2004',
					location: 'Nagoya, Japan'
				},
				{
					title: 'M.Sc.',
					organization:
						'Department of Electrical Engineering and Computer Science, Nagoya University',
					date: '2004-2006',
					location: 'Nagoya, Japan'
				},
				{
					title: 'Ph.D.',
					organization:
						'Department of Electrical Engineering and Computer Science, Nagoya University',
					date: '2006-2010',
					location: 'Nagoya, Japan'
				}
			],
			projects: [
				'Master Thesis - Robust BFDM Receiver for Dispersive Time-Varying Channels',
				'Doctor Thesis - Pulse-Shaping Orthogonal Frequency Division Multiplexing Systems for Time-Frequency Dispersive Channels',
				'Regular member of IEEE (Communication Society, Solid-state Circuits Society), IEICE',
				'April 2007~March 2008 the President of IEICE Nagoya University Student Branch',
				'Local organizer of CIMPA Research School, “Hypergeometric Functions and Representation theory,” August 5~16, 2013, Ulaanbaatar, Mongolia',
				'Jury of MNB (Mongolian National Broadcaster) TV contest “Young Inventor”, 2011~2013.',
				'Translation of a public lecture by 2008 Nobel laureate Toshihide Maskawa “What does CP violation tell us”, Central Palace of Culture, 21 April 2012.'
			],
			achievements: [
				'2006/8/10 IECE, WBS best paper award',
				'2008/6/11 IEICE Toukai branch, Best student research award',
				'2003-2010 Japanese Government (Monbusho) scholarship',
				'1995 National Basketball Championship, Silver medal',
				'1993 UB physical olympiad, 9-th grade, 1 place',
				'1994 National Mathematical Olympiad, 10-th grade, 2 place (silver medal)',
				'1994 International Mathematical Olympiad, Mongolian Team member'
			]
		},
		{
			role: 'Consultant',
			firstname: 'Amartuvshin',
			lastname: 'Renchin-Ochir',
			image: '/images/members/amartuvshin.jpeg',
			bio: null,
			current: [
				{
					title: 'Consultant',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2023',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Senior lecturer',
					organization: 'National University of Mongolia',
					date: 'Since 2007',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Robot team instructor',
					organization: 'National University of Mongolia',
					date: 'Since 2007',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'Technical advisor',
					organization: 'Measurement LLC',
					date: 'June - September, 2022',
					location: 'Mongolia'
				},
				{
					title: 'Project Researcher',
					organization: 'IWATE UNIVERSITY',
					date: 'April - August, 2019',
					location: 'Iwate, Japan'
				},
				{
					title: 'Research assistant',
					organization: 'IWATE UNIVERSITY',
					date: 'October, 2016 - March, 2019',
					location: 'Iwate, Japan'
				},
				{
					title: 'Freelancer R&D engineer',
					organization: 'Khairkhan Semiconductors LLC',
					date: 'November, 2014 - May, 2015',
					location: 'Mongolia'
				}
			],
			educations: [
				{
					title: 'Ph.D.',
					organization: 'Iwate University',
					date: 'March, 2019',
					location: 'Iwate, Japan'
				},
				{
					title: 'M.Sc.',
					organization: 'Iwate University',
					date: 'June, 2010',
					location: 'Iwate, Japan'
				},
				{
					title: 'B.Sc.',
					organization: 'National University of Mongolia',
					date: 'June, 2007',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			projects: [
				'Ph.D thesis: A Study of Shape Segmentation and Reconstruction of Mongolian Buddha Statues with Three-dimensional Measured Point Cloud.',
				'Master thesis: Traditional Mongolian Script Recognition System.',
				'Diploma thesis: Adaptive motor torque control for moving robots.',
				'“Printing paper counting unit”, for Admon LLC, on Dec, 2006.',
				'“Restaurant customer reservation system”, for Meta LLC, on Nov, 2007.',
				'“The biggest mobile in Mongolian”, for Unitel LLC, presented in National Technology Exhibition, May, 2008.',
				'“Scoreboard of National Soccer Stadium”, for Mongolian Football Federation (MFF), May, 2009.',
				'“Mongolia water resource management system”, for Water agency of Mongolian government, as chief programmer, Nov, 2005.',
				'“Online library management system”, for Orchlon international School, as chief programmer, Jun, 2009 to May 2010.',
				'“CMS of portal website http://www.laitai.mn“, as Administrator and developer, Jun, 2007 to Sep, 2009.',
				'Numbers of company introduction websites, using the technologies such as PHP, MySQL, java, and AJAX.'
			],
			achievements: [
				'Volunteer reviewer in Journal of the Chinese institute of engineers. Since 2019.',
				'The Honor medal of Iwate University 2019.',
				'“The excellent worker credential of NUM” in 2015 National University of Mongolia, Ulaanbaatar Mongolia.',
				'“The best worker of NUM” in 2010 National University of Mongolia, Ulaanbaatar Mongolia.',
				'The 2022 National robot contest 3rd place, “ABU Robocon 2022 Mongolia”, Ulaanbaatar Mongolia (instructor of SOYOMBO team).',
				'The 2020 Asia-Pacific robot contest, “ABU Robocon 2020 online festival” , Host: NHK Japan. (instructor of SOYOMBO team).',
				'Mabuchi Motor Special award in 2009 Asia-pacific Robot contest (ABU Robocon 2008 Tokyo), Tokyo Japan (instructor of SOYOMBO team).',
				'Golden medal in 2009 National robot contest (ABU Robocon 2009 Mongolia), Ulaanbaatar Mongolia (instructor of SOYOMBO team).',
				'Best Engineering Idea award in 2008 Asia-pacific Robot contest (ABU Robocon 2008 Pune), Pune India (instructor of SOYOMBO team).',
				'Golden medal in 2008 National robot contest (ABU Robocon 2008 Mongolia), Ulaanbaatar Mongolia (instructor of SOYOMBO team).',
				'Toyota Special award in 2007 Asia-pacific Robot contest (ABU Robocon 2007 Hanoi), Hanoi Vietnam (Leader of SOYOMBO team).',
				'Leader Student Golden medal in 2007 Mongolian Students Association, Ulaanbaatar Mongolia.',
				'Golden medal in 2007 National robot contest (ABU Robocon 2007 Mongolia), Ulaanbaatar Mongolia (leader of SOYOMBO team).',
				'Silver medal in 2006 National robot contest (ABU Robocon 2006 Mongolia), Ulaanbaatar Mongolia (leader of SOYOMBO team).'
			]
		},
		// {
		// 	role: 'Consultant',
		// 	firstname: 'Enkhtogtokh',
		// 	lastname: 'Togootogtokh',
		// 	image: '/images/members/enkhtogtokh.jpeg',
		// 	bio: 'Senior AI Research, Professor(Ass.), Researcher, and Software Engineer with academic and industry experience in AI, machine learning, deep learning, computer vision, software development, software architect & design.',
		// 	current: [
		// 		{
		// 			title: 'Consultant',
		// 			organization: 'Mirai Technologies LLC',
		// 			date: 'Since 2023',
		// 			location: 'Ulaanbaatar, Mongolia'
		// 		},
		// 		{
		// 			title: 'Senior AI Researcher',
		// 			organization: 'Technidoo Solutions',
		// 			date: 'Since 2019',
		// 			location: 'Germany'
		// 		},
		// 		{
		// 			title: 'Professor (Ass.)',
		// 			organization: 'CS department, Mongolian University of Science and Technology',
		// 			date: 'Since 2017',
		// 			location: 'Ulaanbaatar, Mongolia'
		// 		}
		// 	],
		// 	expierences: [
		// 		{
		// 			title: 'Machine Learning Researcher',
		// 			organization: 'MINE Lab, National Central University',
		// 			date: '2013 - 2017',
		// 			location: 'Taiwan'
		// 		},
		// 		{
		// 			title: 'Software engineer',
		// 			organization: 'Nimon Systems',
		// 			date: '2008 - 2012',
		// 			location: 'Mongolia'
		// 		}
		// 	],
		// 	educations: [
		// 		{
		// 			title: 'Post Doc in deep lear ning for UAV',
		// 			organization: 'University of Udine, Italy, National University of Singapore',
		// 			date: '2018-2019',
		// 			location: 'Singapore'
		// 		},
		// 		{
		// 			title: 'Ph.D in Computer Science',
		// 			organization: 'National Central University (Taiwan top university system)',
		// 			date: '2013-2017',
		// 			location: 'Taiwan'
		// 		},
		// 		{
		// 			title: 'MSc in Mathematics',
		// 			organization: 'National University of Mongolia',
		// 			date: '2006-2008',
		// 			location: 'Ulaanbaatar, Mongolia'
		// 		},
		// 		{
		// 			title: 'BSc in Mathematics',
		// 			organization: 'National University of Mongolia',
		// 			date: '2002-2006',
		// 			location: 'Ulaanbaatar, Mongolia'
		// 		}
		// 	],
		// 	projects: [
		// 		'Sennheiser Price Optimization BOT platform, Technidoo Solutions, Sennheiser GMBH, 2021-2022',
		// 		'Trixie Logistic Optimization AI platform, Technidoo Solutions, Trixie GMBH, Microsoft, 2020-2021',
		// 		'BASF Counterfeit detection AI platform, Technidoo solutions, BASF, Alibaba, 2019-2020',
		// 		'PRESNET – AI Computer Vision for UAV Singaporean and Italian Government, Ministries of defense of Singapore and Italy, 2017-2019',
		// 		'Inter national Build4Skills Big Data Project Mongolian Government, BMZ Germany, 2016-2017'
		// 	],
		// 	achievements: [
		// 		'From 2018-2019, i won the post doc grant and challenged in AI government project. I have successfully done in half of the scheduled time.',
		// 		'From 2013-2017, I gained the Ph.D degree in computer science specially machine (deep) learning from Taiwan top university system (world ranking top-70).'
		// 	]
		// },
		{
			role: 'Consultant',
			firstname: 'An',
			lastname: 'Nguyen',
			image: '/images/members/an-nguyen.jpeg',
			bio: null,
			current: [
				{
					title: 'Consultant',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2023',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'Researcher',
					organization: 'Zatitech',
					date: 'Sep 2020 - Aug 2021',
					location: null
				},
				{
					title: 'Research Intern',
					organization: 'Horiba-MIRA',
					date: 'Aug 2018 - Sep 2018',
					location: null
				},
				{
					title: 'Aerospace Engineer Internship',
					organization: 'Boeing Japan',
					date: 'Apr 2018 - Jul 2018',
					location: null
				}
			],
			educations: [
				{
					title: 'Doctor of Philosophy Program, Computer Science Department.',
					organization: 'Oxford University, United Kingdom',
					date: '2021-2024',
					location: 'United Kingdom'
				},
				{
					title: 'Master Program, Robotics, Autonomous Systems and Artificial Intelligence.',
					organization: 'Nagoya University, Japan',
					date: '2019 - 2021',
					location: 'Nagoya, Japan'
				}
			],
			projects: [
				'Joint research project focused on developing autonomous feature including localization, path following and collision avoidance for Automated Guided Vehicle (AGV) prototype. Mar 2020 - Aug 2021',
				'Adopting data-driven method to identify Human Driving Behavior for behavior planing and prediction from real world data collected in downtown area. Sep 2019 - Aug 2021',
				'Setup testing vehicle and tune LiDAR, sensor and cameras on Toyota Prius 2015. Mar 2018 - Aug 2019'
			],
			achievements: [
				'2019-2021, MEXT Scholarship, Japanese Government',
				'September 2015 - August 2019, JASSO Scholarship, JASSO Foundation',
				'Conference Reviewers: IROS (2022), ICCA (2022), IFAC (2022), COSY (2022), FORMATS (2022)'
			]
		},
		{
			role: 'Research Engineer',
			firstname: 'Lester (Peng-Jian)',
			lastname: 'Yang',
			image: '/images/members/lester.jpeg',
			bio: 'Projects more on lesterpjy.me',
			current: [
				{
					title: 'Research Engineer',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2024',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'Senior Engineering Scientist',
					organization: 'Logitech',
					date: 'May 2021 - Jun 2022',
					location: 'Hsinchu, Taiwan'
				},
				{
					title: 'Data Science Intern',
					organization: 'Omnistream Co.',
					date: 'Apr 2020 - Jun 2020',
					location: 'Singapore'
				},
				{
					title: 'Undergraduate Researcher in Theoretical and Quantum Chemistry',
					organization: 'Nagoya University',
					date: 'Aug 2018 - Sep 2019',
					location: 'Nagoya, Japan'
				}
			],
			educations: [
				{
					title: 'Master of Information and Data Science',
					organization: 'University of California, Berkeley',
					date: 'August 2019 – May 2021',
					location: 'California, USA'
				},
				{
					title: 'Bachelor of Science in Chemistry',
					organization: 'Nagoya University',
					date: 'October 2015 – September 2019',
					location: 'Nagoya, Japan'
				}
			],
			projects: [
				'Open Source Contributions LangChain: integration of PDF document loader via pdfplumber, thus enabling usage of pdfplumber’s visual debugger with LangChain',
				'Influencing vaccination opinions: A difference-in-difference analysis of random experiment data studying the effects of exposing engaging media of COVID-19 vaccination facts on inclination of vaccination.',
				'Analysis of BayWheels Bike-share Data: Queried top travel routes separated by user type by querying the public bike-share dataset on BigQuery with SQL. Devised recommendations for improving revenue stream with bike station status, popularity of stations by usage, and time of use.',
				'Flight Delay Prediction: prediction of departure flight delay using the Bureau of Transport Statistic on-time performance dataset, and weather data provided by NOAA. 11 gigabytes of data were cleaned, explored, and engineered with PySpark to build a gradient boosted tree model that predicts departure delay with a recall of 86%'
			],
			achievements: [
				'Peng-Jian Yang, Shang-Yu Yu, Yi-Hsieh Wang, Ko Chun Lin, Zhaoyan Han. 2023. Color matching system for product manufacturing. USPTO. US11847799B2.',
				'Peng-Jian Yang, Ying Ting Chen, Yuechan Chen, Daniel Cer. 2021. NT5?! Training T5 to Perform Numerical Reasoning. arXiv preprint arXiv: 2104.07307v2',
				'Peng-Jian Yang, Mahito Sugiyama, Koji Tsuda, Takeshi Yanai. 2020. Artificial neural networks applied as molecularwave function solvers. Journal of Chemical Theory and Computation. doi:10.1021/acs.jctc.9b01132',
				'NGK Insulators Scholarship 2017-2019, Daiko Foundation Scholarship 2017, Japan Gov. Monbukagakusho Honors Scholarship 2016.'
			]
		},
		{
			role: 'Consultant',
			firstname: 'Sodtavilan',
			lastname: 'Odonchimed',
			image: '/images/members/sodtavilan.jpeg',
			bio: null,
			current: [
				{
					title: 'Consultant',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2023',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'AIエンジニア',
					organization: '株式会社エクサウィザ ズ',
					date: '2019/08 - 2019/09',
					location: 'Japan'
				}
			],
			educations: [
				{
					title: '工学部システム創成学科 3年次編入学',
					organization: '東京大学',
					date: '2021/04 - 2024/03 卒業予定',
					location: 'Japan'
				},
				{
					title: '電子制御工学科 3年次編入学',
					organization: '長岡工業高等専門学校',
					date: '2018/04 - 2021/03 卒業',
					location: 'Japan'
				},
				{
					title: '東京日本語教育センター',
					organization: 'K1コース',
					date: '入学 2017/04 - 2018/03 卒業',
					location: 'Japan'
				},
				{
					title: '電気電子工学科 1年入学',
					organization: '新モンゴル高専',
					date: '2014/09 - 2017/03 3学年卒業',
					location: 'Japan'
				}
			],
			projects: [
				'「ニュ ラルネットワ クによる重力波波形再構成のための最適なフィルターデザインの生成」 日本物理学会第76年次大会 発表 電子制御工学科 卒業研究 特別賞 金賞',
				'「ニュ ラルネットワ クによる重力波波形抽出のためのフィルタ生成の検討」 日本物理学会2022年秋季大会 発表',
				'「Three-Dimensional Medical Image Synthesis with Denoising Diffusion Probabilistic Models」 MIDL 2022 Short Paper'
			],
			achievements: [
				'日本語能力試験 N1',
				'Startup Weekend Tokyo Fintech #3 第三位',
				'信州アプリコンテスト0 U29 優秀賞 総務省信越総合通信局長賞',
				'ビジネスデザイン発見&発表会 信越大会 最優秀賞 特別賞',
				'DCON2019 最優秀賞 企業賞',
				'高専ワイヤレスコンテスト スマ トファクトリ 賞',
				'長岡工業高等専門 同窓会 功労章',
				'DL Circle 論文輪読コミュニティ 共同創業者'
			]
		},
		{
			role: 'Bridge Engineer',
			firstname: 'Ganbold',
			lastname: 'Sukhbat',
			image: '/images/members/ganbold.jpeg',
			bio: null,
			current: [
				{
					title: 'Bridge Engineer',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2022',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'Bridge System Engineer',
					organization: '2nd Community LLC',
					date: '2021',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'CTO',
					organization: 'Odo Ecosystems',
					date: '2017-2021',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'CTO',
					organization: 'Nimo Consulting',
					date: '2013-2017',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'System engineer',
					organization: 'Nimo Holdings',
					date: '2009-2013',
					location: 'Tokyo, Japan'
				},
				{
					title: 'System engineer',
					organization: 'Freelancer',
					date: '2007-2009',
					location: 'Tokyo, Japan'
				},
				{
					title: 'Engineer',
					organization: 'Fuji Infoxnet',
					date: '2002-2007',
					location: 'Tokyo, Japan'
				}
			],
			educations: [
				{
					title: 'Bachelor in Software Engineering',
					organization: 'Osaka University',
					date: '1999-2002',
					location: 'Osaka, Japan'
				},
				{
					title: 'Foundation Degree',
					organization: 'National Institute of Technology, Numazu College',
					date: '1996-1999',
					location: 'Shizuoka, Japan'
				}
			],
			projects: [
				'Car Service',
				'Retail Eco system',
				'VAT Promotion System',
				'Social Game',
				'Health Insurance System',
				'Financial System',
				'Recruit Site',
				'e-Money',
				'Front and Backoffice System',
				'Digital Broadcasting',
				'Internal Enterprise Systems'
			],
			achievements: ['1992, 1993 Bronze medals, National Mathematics Olympiad, Mongolia']
		},
		{
			role: 'Bridge Engineer',
			firstname: 'Ider',
			lastname: 'Erdenebaatar',
			image: '/images/members/ider.jpeg',
			bio: null,
			current: [
				{
					title: 'Bridge Engineer',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2022',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'プロジェクトマネジャ、SE',
					organization: '大手自動車メーカーの生産管理部門システムの開発案件',
					date: '2014-2021',
					location: '茨城県, 日本'
				},
				{
					title: 'SE、チームリーダー',
					organization: 'サプライチェーンシステムへ子会社の自動車メーカへ導入案件',
					date: '2012-2014',
					location: '茨城県, 日本'
				},
				{
					title: 'システムエンジニア',
					organization: 'サプライチェーン基幹システム導入開発のプロジェクト',
					date: '2007-2012',
					location: '東京, 日本'
				},
				{
					title: 'システムアドバイザ',
					organization: '某自動車部品会社への提案案件',
					date: '2006-2007',
					location: '静岡県, 日本'
				},
				{
					title: 'ソフトウェア開発者',
					organization: 'e-Manufactoring 某配管パイプ製造メーカー会社に導入案件',
					date: '2005-2006',
					location: '埼玉県、日本'
				},
				{
					title: 'ソフトウェア開発者',
					organization: 'ベンチャーのサプライチェーン管理パッケージ開発支援',
					date: '2004-2005',
					location: '東京、日本'
				}
			],
			educations: [
				{
					title: '情報工学科卒業',
					organization: '苫小牧高等専門学校',
					date: '1997-2000',
					location: '北海道、日本'
				},
				{
					title: '情報学科専攻修士課程卒業',
					organization: '室蘭工業大学大学院',
					date: '2003-2004',
					location: '北海道、日本'
				}
			],
			projects: [
				'Java、PLSQL等の開発',
				'RD BのSQLデータ分析・可視化',
				'統合ERPパッケージ導入経験（OracleEBS、SAP）',
				'生産管理に関する業務知識（部品・自動車関連）',
				'プロジェクト管理'
			],
			achievements: [
				'2008 OracleEBS（Gold Master資格あり）',
				'1996‐2000 日本政府文部科学省奨学金, 日本',
				'2002-2004ロータリ米山奨学金'
			]
		},
		{
			role: 'Bridge Engineer',
			firstname: 'Ganbayar',
			lastname: 'Amgalan',
			image: '/images/members/ganbayar_a.jpeg',
			bio: null,
			current: [
				{
					title: 'Bridge Engineer',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2024',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'SE・チームリーダー',
					organization: '（株）テービーアイ（東京貿易グループ）',
					date: '2018 - 2023',
					location: 'Tokyo, Japan'
				},
				{
					title: 'フリーランサー',
					organization: '',
					date: '2012 - 2017',
					location: 'San Francisco, Los Angeles/USA'
				},
				{
					title: 'SE・チームリーダー',
					organization: '（株）キヤノンソフトウエア',
					date: '2006 - 2012',
					location: 'Kawasaki/Japan'
				},
				{
					title: 'ソフトウエア開発者',
					organization: '（株）アクセスネット',
					date: '2004 - 2006',
					location: 'Tokyo/Japan'
				}
			],
			educations: [
				{
					title: 'Computer engineering extension',
					organization: 'University of California, Los Angeles',
					date: '2016-2017',
					location: 'Los Angeles/USA'
				},
				{
					title: 'MBA',
					organization: 'California University of Management and Sciences',
					date: '2014-2015',
					location: 'Los Angeles/USA'
				},
				{
					title: 'pre-MBA, MBA',
					organization: 'Missouri State University',
					date: '2012-2013',
					location: 'Missouri/USA'
				},
				{
					title: 'B.Sc.',
					organization: '宇都宮大学',
					date: '2001-2003',
					location: 'Tochigi/Japan'
				},
				{
					title: '専門士',
					organization: '石川工業高等専門学校',
					date: '1998-2000',
					location: 'Ishikawa/Japan'
				}
			],
			projects: [
				'警備監視システム開発（CSPセントラル警備保障）',
				'キヤノン複写機組み込み開発',
				'Docomo無線基地局組み込み開発',
				'監視カメラの画像解析・AI開発',
				'顔認証用3D化ツール開発',
				'タッチパネル開発',
				'リモートコントローラーVNCサーバー開発',
				'システムの監視・冗長化開発',
				'字幕再生可能なビデオプレイヤー開発'
			],
			achievements: [
				'1997-2002 日本政府文部科学省奨学金, 日本',
				'2015 California University of Management and Sciences - Cum Laude Honor Graduate CGPA 3.89',
				'2017 University of California, Los Angeles - Awarded with Distinction'
			]
		},
		{
			role: 'Bridge Engineer',
			firstname: 'Ankhbayar',
			lastname: 'Tsagaan',
			image: '/images/members/ankhbayar.jpeg',
			bio: null,
			current: [
				{
					title: 'Bridge Engineer',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2022',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'ブリッジSE',
					organization: '2ndコミュニティシステムズ株式会社',
					date: '2021-2022',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'SE、チームリーダー',
					organization: 'ユニメディアソリューションズ株式会社',
					date: '2014-2021',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'シニアエンジニア',
					organization: 'PCM LLC',
					date: '2012-2014',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'ソフトウェア開発者',
					organization: 'モンゴル電気通信株式会社',
					date: '2009-2012',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'ソフトウェア開発者',
					organization: 'Digitaleaf Inc.',
					date: '2006-2009',
					location: 'Tokyo, Japan'
				}
			],
			educations: [
				{
					title: '専門士',
					organization: '日本電子専門学校組込み学科',
					date: '2005-2008',
					location: 'Tokyo, Japan'
				},
				{
					title: '情報処理学士号 ',
					organization: 'モンゴル国立大学情報処理学部',
					date: '2001-2005',
					location: 'ウラーンバートル, モンゴル'
				}
			],
			projects: [
				'国際通話サービス提供システム',
				'課金、支払い収集システム',
				'TV販売バックエンドシステム',
				'POSシステム',
				'設備メンテナンス管理システム',
				'CROWDジョブ',
				'受注管理システム',
				'作業管理システム',
				'オンラインクラスマネジメントシステム',
				'部屋レンタルシステム',
				'ブロックチェーンプラットフォーム',
				'AI'
			],
			achievements: [
				'2012-2014 ITスタートアップインキュベーションプログラム賞',
				'2005‐2008 日本政府文部科学省奨学金, 日本',
				'2002-2005住友奨学金（モンゴル国立大学大学生向け）',
				'1998全国物理学オリンピック、スペシャル賞',
				'1998 国際ロシア語オリンピック, モスクワ'
			]
		},
		{
			role: 'Product Manager',
			firstname: 'Yesui',
			lastname: 'Baatar',
			image: '/images/members/yesui.jpeg',
			bio: null,
			current: [
				{
					title: 'Product Manager',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2024',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'Conference Zoom Operator',
					organization: 'The International Academic Forum IAFOR',
					date: '2021 - 2022',
					location: null
				},
				{
					title: 'Conference Organizing Committee',
					organization: 'AIESEC volunteering organization',
					date: '2018 - 2019',
					location: null
				}
			],
			educations: [
				{
					title: 'Master in Quantum Engineering',
					organization: 'Nagoya University',
					date: '2023/10 - ongoing',
					location: 'Nagayo, Japan'
				},
				{
					title: 'Bachelor in Applied Physics',
					organization: 'Nagoya University',
					date: '2019/10-2023/09',
					location: 'Nagayo, Japan'
				}
			],
			projects: [
				'Bachelor Thesis: Conductance through Normal Metal/Insulator/Normal Metal/Insulator/Superconductor junction',
				'Customized human detection model'
			],
			achievements: [
				'2011 Calligraphy Olympiad - Honorary Diploma of the President of Mongolia for successful participation',
				'2017 State Physics Olympiad Honorary Certificate'
			]
		},
		{
			role: 'Software Engineer',
			firstname: 'Gerelt-Od',
			lastname: 'Surenjav',
			image: '/images/members/profile_gereltod.jpeg',
			bio: null,
			current: [
				{
					title: 'Team Leader',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2024',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'Senior Software Engineer',
					organization: 'GTN Mongolia',
					date: '2022-2023',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Senior Software Engineer',
					organization: 'TAB Solutions',
					date: '2019-2020',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Software Engineer',
					organization: 'Freelancer',
					date: '2017-2019',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Senior Software Engineer/CTO',
					organization: ' TengerSystems LLC, ARD holdings',
					date: '2014-2017',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Senior Software Engineer/CTO',
					organization: 'SmartSolutions',
					date: '2012-2014',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Software Engineer',
					organization: 'XacBank',
					date: '2007-2012',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Software Developer',
					organization: 'ECM',
					date: '2005-2007',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			educations: [
				{
					title: 'Software Engineer',
					organization:
						'Mongolian University of Science and Technology - Computer Science and Management School',
					date: '2000-2005',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			projects: [
				'jobandwork.jp, System Designing, Cloud Infrastructure - GCP, 2019',
				'Tele-conference(voting) system of THE CREATE HURAL(PARLIAMENT HOUSE) OF MONGOLIA was integrated in Finger identification system (Java, c#, DigitalPersona EIKON touch), 2018',
				'Genius bank (for accounting and savings and credit cooperative) @ARD, 2014-2017',
				'Traffic police fine system, A camera system to fine vehicles driving in bus lanes @SmartSolutions, 2012-2014',
				'Surveillance camera system (Tattile, Merit Lillin), RF, IC-chip card programming @SmartSolutions, 2012-2014',
				'AMAR mobile banking system, Telephone banking Core Development, C#/ASP.NET, XacBank, 2010',
				'Internet banking system, Core Development, C#/ASP.NET, XacBank, 2008',
				'Credit Scoring, EOffice, @ECM, 2005-2007'
			],
			achievements: [
				'PRO: Designing and Developing ASP.NET Applications using Microsoft .NET Framework 3.5 (New Delhi India, 2011)',
				'Microsoft.NET Framework 3.5, ASP.NET Application Development (New Delhi India, 2011)',
				'Microsoft.NET Framework 3.5, Windows Communication Foundation Application Development (New Delhi India, 2011)'
			]
		},
		{
			role: 'Software Engineer',
			firstname: 'Bat-Orshikh',
			lastname: 'Baavgaikhuu',
			image: '/images/members/bat-orshikh.jpeg',
			bio: null,
			current: [
				{
					title: 'Software Engineer',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2022',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'Full Stack Software Engineer',
					organization: 'Second Community LLC',
					date: '2017-2021',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'IOS Developer',
					organization: 'Digital Media Solutions LLC',
					date: '2016-2017',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'IOS Developer Intern',
					organization: 'Digital Media Solutions LLC',
					date: '2016',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			educations: [
				{
					title: 'Bachelor of Computer Science in Software Engineering',
					organization: 'Mongolian University of Science and Technology',
					date: '2013-2017',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			projects: [
				'Online music studio rental service web applications using Angular, NodeJS, and Typescript',
				'Second Community’s back staffs’ application development using Ruby on Rails',
				'Ethereum Blockchain based notary application using Angular, NodeJs, Typescript and Solidity for smart contract',
				'iOS Dictionary Apps for iPhone and iPad using Swift and Objective-C'
			],
			achievements: [
				'2018 Third place “Connected Car” iOS prototype development challenge organized by Topcoder',
				'2017 Outstanding Graduate Student Award',
				'2015-2016 in Dean’s List (4 consecutive semesters)',
				'2015 Second place Team Competitive Programming Contest among Mongolian universities ',
				'2015 Mitsubishi Corporation International Scholarship awardee',
				'2014 Second place Team Competitive Programming Contest',
				'2014 Third place Competitive Programming Contest among universities of Mongolia',
				'2014 Scholarship Awardee: Swiss Agency for Development and Cooperation SDC and Zorig Foundation',
				'2013 Second place Competitive Programming Contest among the high school students of Bayangol District',
				'2013 Third place Competitive Programming Contest among the high school students of Bayangol District'
			]
		},
		{
			role: 'Software Engineer',
			firstname: 'Ganbayar',
			lastname: 'Batkhishig',
			image: '/images/members/ganbayar.jpeg',
			bio: null,
			current: [
				{
					title: 'Software Engineer',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2022',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'Software Developer',
					organization: '2nd Community LLC',
					date: '2020-2021',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Front-End Developer',
					organization: 'Ezpay LLC',
					date: '2019-2020',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Software Engineer',
					organization: 'Genuine C Pro LLC',
					date: '2018-2019',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Software Engineer',
					organization: 'Interactive Systems LLC',
					date: '2015-2018',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			educations: [],
			projects: [
				'Na-Ra-Uno SNS development',
				'Development of control center of money transactions',
				'R&D using ZIGBEE technology on home automation system',
				'R&D ISOBUS technology'
			],
			achievements: [
				'2022, Graduated Japanese learning course, Mongolia',
				'2011 Second Place, making a robot competition for University Students, Mongolia',
				'2011 First Place, Algorithm Olympiad for University Students and Teachers, Mongolia',
				'2009-2010 Silver medal, National Project Programming Olympiad, Mongolia',
				'2009 Silver medal, International Programming Project Olympiad, Turkmenistan'
			]
		},
		{
			role: 'Software Engineer',
			firstname: 'Sukh-Erdene',
			lastname: 'Nyamsukh',
			image: '/images/members/nsukherdene.jpeg',
			bio: `Versatile developer offering 4 years of experience in demanding environments focused on producing fast-performant, secure systems using cutting-edge technologies. Dedicated to always improving one's skills and learning something new everyday. Strong problem solver and team player.`,
			current: [
				{
					title: 'Software Engineer',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2023',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'Senior developer',
					organization: 'Infinite Solutions Co.,Ltd',
					date: '2021-2023',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Senior developer',
					organization: 'Tab Solution Co.,Ltd',
					date: '2020/10 - 2021/06',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Web developer',
					organization: 'Tab Solution Co.,Ltd',
					date: '2020/04 - 2021/10',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Network Administrator',
					organization: 'BTC Investment Mongolia Co., Ltd',
					date: '2019/04 - 2020/01',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			educations: [
				{
					title: 'Bachelor: Computer Science',
					organization: 'National University of Mongolia',
					date: '2014 - 2018',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'GPA: 3.8',
					organization: 'MUST High School',
					date: '2013 - 2014',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			projects: [
				'Recruit matching platform',
				'Labor management system',
				'Sales & Marketing system',
				'Wallet system',
				'NFT & NFT Coin',
				'Multichain ticketing'
			],
			achievements: []
		},
		{
			role: 'Software Engineer',
			firstname: 'Khaschuluu',
			lastname: 'Munkhbayar',
			image: '/images/members/khaschuluu.jpeg',
			bio: null,
			current: [
				{
					title: 'Software Engineer',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2024',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'CTO',
					organization: 'Altex.mn - Crypto Exchange',
					date: '2022 - 2024',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Blockchain specialist',
					organization: 'ICT Group',
					date: '2020 - 2022',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Founder & CEO',
					organization: 'Digital Egereg LLC',
					date: '2016 - 2018',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Senior developer',
					organization: 'Ard Financial Group',
					date: '2014 - 2016',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			educations: [
				{
					title: 'Bachelor - Computer Science',
					organization: 'National University of Mongolia',
					date: '2008-2014',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			projects: [
				'Altex Investment - Crypto gateway to stock market',
				'AltPay - P2P platform for international money transfer',
				'ReindeerBoots - Inventory management',
				'Bileg - Delivery management',
				'Trade.mn BCS - Binance Smart Chain side of Trade.mn',
				'Smart contracts - Smart contract development for token (TRD, SPC), NFT, airdrop, lottery etc.',
				'Egereg - Mongolian first stable crypto token to MNT',
				'Bloodstock Auction - Real-time online auction'
			],
			achievements: []
		},
		{
			role: 'Software engineer',
			firstname: 'Nurbyek',
			lastname: 'Khuansh',
			image: '/images/members/nurbyek.jpeg',
			bio: null,
			current: [
				{
					title: 'Software engineer',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2024',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'Developer',
					organization: 'LendMN NBFI JSC',
					date: '2021-2024',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Developer',
					organization: 'Digital Edu Management LLC',
					date: '2021-2024',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			educations: [
				{
					title: 'Bachelor in Information Technology',
					organization: 'Mongolian University of Science and Technology',
					date: '2017-2021',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			projects: [],
			achievements: []
		},
		{
			role: 'Software Engineer',
			firstname: 'Odbayar',
			lastname: 'Mendbayar',
			image: '/images/members/soyol.jpeg',
			bio: null,
			current: [
				{
					title: 'Software Engineer',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2024',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'Software Engineer',
					organization: 'Riku Tech LLC,',
					date: '2023 - 2024',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			educations: [
				{
					title: 'Associate Degree - Computer Science',
					organization: 'Anan National College of Technology',
					date: '2020-2023',
					location: 'Tokushima, Japan'
				}
			],
			projects: ['Optimizing Posture Control for Humanoid Robots During Falls Using DDPG'],
			achievements: []
		},
		{
			role: 'Software Engineer',
			firstname: 'Dulguun',
			lastname: 'Battugs',
			image: '/images/members/dolgoon.jpeg',
			bio: null,
			current: [
				{
					title: 'Software Engineer',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2024',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'Network Engineer',
					organization: 'Unitel LLC',
					date: '2021-2024',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Software Engineer',
					organization: 'Riku Tech LLC',
					date: '2021-2024',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			educations: [
				{
					title: 'Associate Degree - Computer Science',
					organization: 'Matsue National College of Technology',
					date: '2018-2021',
					location: 'Shimane, Japan'
				}
			],
			projects: ['Adaptive Traffic Signal Control with Reinforcement Learning'],
			achievements: []
		},
		{
			role: 'AI Engineer',
			firstname: 'Munkh-Erdene',
			lastname: 'Otgonbold',
			image: '/images/members/munkherdene.jpeg',
			bio: null,
			current: [
				{
					title: 'AI Engineer',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2024',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'Research Assistant',
					organization: 'United Arab Emirates University, AI and Robotics Lab',
					date: '2021-2024',
					location: 'United Arab Emirates'
				}
			],
			educations: [
				{
					title: 'Master in electronic engineering',
					organization: 'Mongolian University of Science and Technology',
					date: '2022-2024',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Bachelor in electronic engineering',
					organization: 'Mongolian University of Science and Technology',
					date: '2016-2020',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			projects: [],
			achievements: []
		},
		{
			role: 'SOFTWARE ENGINEER',
			firstname: 'Manaljav',
			lastname: 'Purevsuren',
			image: '/images/members/manaljav.jpeg',
			bio: null,
			current: [
				{
					title: 'Software Engineer',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2024',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'Fullstack Developer',
					organization: 'Infinite Solutions LLC',
					date: '2022-2024',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Software Developer',
					organization: 'JPMorgan Chase & Co',
					date: '2021-2022',
					location: 'Tampa, Florida USA'
				}
			],
			educations: [
				{
					title: 'Computer Science',
					organization: 'University of South Florida',
					date: '2016-2020',
					location: 'Tampa, Florida USA'
				},
				{
					title: 'Pre-Engineering',
					organization: 'Lindenwood University',
					date: '2014-2016',
					location: 'St. Charles, Missouri USA'
				}
			],
			projects: [
				'Meterium - Tokenized Marketplace',
				'VSign - Electronic signatures',
				'TDB - Banking Web',
				'Chase customer service - Web app'
			],
			achievements: [
				'2016 Missouri State College Math Competition, 1st place (Team)',
				'2020 USF College of Engineering, Excellence in Computer Science Award'
			]
		},
		{
			role: 'AI Engineer',
			firstname: 'Byambadorj',
			lastname: 'Baasan',
			image: '/images/members/byambadorj.jpeg',
			bio: null,
			current: [
				{
					title: 'AI Engineer',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2024',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'Full-stack developer',
					organization: 'Dentsu Data Artist Mongol',
					date: '2019 - 2024',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			educations: [
				{
					title: 'Associate Degree - Computer Science',
					organization: 'Kumamoto National Institute of Technology',
					date: '2016 - 2019',
					location: 'Kumamoto, Japan'
				}
			],
			projects: ['ACM - Advertisement banner generation using AI'],
			achievements: []
		},
		{
			role: 'FullStack developer',
			firstname: 'Enkhtur',
			lastname: 'Enkhee',
			image: '/images/members/enkhtur.jpeg',
			bio: null,
			current: [
				{
					title: 'FullStack Developer',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2024.11',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'BI Developer in Tableau',
					organization: 'MAK LLC',
					date: '2023-2023',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Analytic Data Metric Developer',
					organization: 'RioTinto Mongolia',
					date: '2019-2019',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Software engineer',
					organization: 'ITSystems LLC',
					date: '2013-2023',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Software engineer',
					organization: 'Anungoo LLC',
					date: '2015-2017',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Sofware engineer, Billing engineer',
					organization: 'Unitel LLC',
					date: '2006-2013',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			educations: [
				{
					title: 'Software engineer',
					organization:
						'Mongolian University of Science andTechnology - Computer Science and Management School',
					date: '2001-2005',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			projects: [
				'Developed promotions provided by Unitel in Oracle database.(iD, Tariff change, Dopin, Family group, Friends group, Couple, Sms packaging, Green Gold, Group Sms, Mobile marketing, Univision service by GG, Dopin Star, Live package, Corporate VPN, U Media, Fifa 2008, New year promotion 2012, 5 house 5 lucky person, White month promotion )',
				'QSF project, introduced in MCS Anungoo, MCS Coca Cola, MCS Distribution (Works with Yukon)',
				'Medical Registration system (Ambulatori and stationary, Adaptable to various situation)',
				'Worked on DTL system called PRIME which is centralized ETL(extraction, transformation, load) of  RioTinto’s various ERP system’s data to MSSQL OLAP database using SSIS. ',
				'Various registration systems: Finance, Shopping, Restaurant, MRP, Procurement, Logistic&Supply chain, TimeAttendance etc',
				'Various BI Dashboards in Tableau on MAK'
			],
			achievements: [
				'Certified Information Technology Professional (FE): Information and Communication Technology Authority of the Government of Mongolia. 2007-12-21',
				'Oracle Database SQL Certified Expert (Passing score 70%), Kuala Lumpur, Malaysias, 2009',
				'Oracle Database 10g Administrator Certified(Passing score 100%), Kuala Lumpur, Malaysia, 2009',
				'Employee of the year, Unitel group, 2012'
			]
		},
		// {
		// 	role: 'Office Manager',
		// 	firstname: 'Gerelmaa',
		// 	lastname: 'Bavuujav',
		// 	image: '/images/members/gerelmaa.jpg',
		// 	bio: null,
		// 	current: [
		// 	{
		// 		title: 'オフィスマネージャー',
		// 		organization: 'Mirai Technologies LLC',
		// 		date: '2024',
		// 		location: 'ウランバートル、モンゴル'
		// 	}
		// 	],
		// 	expierences: [
		// 		{
		// 			title: '国際協力事業翻訳',
		// 			organization: 'CIT LLC',
		// 			date: "2018-2023",
		// 			location: 'ウランバートル、モンゴル'
		// 		},
		// 		{
		// 			title: 'アジア地域国際関係マネージャー',
		// 			organization: 'Lots Invest LLC',
		// 			date: "2014-2017",
		// 			location: 'ウランバートル、モンゴル'
		// 		},
		// 		{
		// 			title: '事業サービス管理者',
		// 			organization: 'Oyu Tolgoi LLC',
		// 			date: "2011-2014",
		// 			location: 'ウランバートル、モンゴル'
		// 		},
		// 		{
		// 			title: '日本語教師',
		// 			organization: '紅萩日本語学',
		// 			date: "2008-2011",
		// 			location: 'ウランバートル、モンゴル'
		// 		},
		// 		{
		// 			title: 'インポートマネージャー',
		// 			organization: 'SRT Transportation LLC',
		// 			date: "1999- 2005",
		// 			location: 'ウランバートル、モンゴル'
		// 		}
		// 	],
		// 	educations: [
		// 		{
		// 			title: '研究生',
		// 			organization: '社会教育研究科、福岡教育大学',
		// 			date: "2007-2008",
		// 			location: '福岡、日本'
		// 		},
		// 		{
		// 			title: '専門士',
		// 			organization: '九州ビジネス専門学校文化・教養科',
		// 			date: "2005-2007",
		// 			location: '福岡、日本'
		// 		},
		// 		{
		// 			title: '学士号',
		// 			organization: '心理学部、華東師範大学',
		// 			date: "1994-1999",
		// 			location: '上海、中国'
		// 		},
		// 	],
		// 	projects: [
		// 	],
		// 	achievements: [
		// 		'日本語能力試験 N1',
		// 		'1994-1999 中国政府奨学金、中国',
		// 	]
		// },
		{
			role: 'Software Engineer',
			firstname: 'Shur-Erdene',
			lastname: 'Buyannemekh',
			image: '/images/members/shurer.jpg',
			bio: null,
			current: [
				{
					title: 'Software Engineer',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2024',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'Teacher in the Computer Science Department',
					organization: 'New Mongol College of Technology',
					date: '2021-2024',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			educations: [
				{
					title: 'Bachelor Degree - Electronic Engineering',
					organization: 'Mongolian University of Science and Technology',
					date: '2021-2022',
					location: 'Ulaanbaatar, Mongolia'
				},
				{
					title: 'Associate Degree - Electrical and Computer Engineering',
					organization: 'Ichinoseki College, National Institute of Technology',
					date: '2018-2021',
					location: 'Ichinoseki, Japan'
				}
			],
			projects: [
				'Effect of water temperature on nitric acid production using non-equilibrium pulse discharge plasma between needle and water surface'
			]
		}
	];
	let isEnter = false;
	let selected = -1;

	let modals = [];

	function showDetail(e, i) {
		if (e.currentTarget && browser) {
			selected = i;
			const { body } = document;
			const { currentTarget } = e;
			const modalImage = document.querySelectorAll(`#modal-image-${i}`);

			body.classList.add('noscroll');

			const clone = currentTarget.cloneNode(true);
			const background = currentTarget.cloneNode(false);

			const tl = gsap.timeline({ defaults: { ease: 'expo' } });
			const from = calculatePosition(currentTarget);
			const to = calculatePosition(modalImage[0]);
			const toBackground = calculatePosition(modals[i]);

			background.className = 'bg-white z-50 rounded-lg';
			clone.classList.remove('member-thumbnail');
			clone.classList.remove('border-white/50');
			clone.classList.remove('hover:border-white/100');
			clone.classList.remove('cursor-pointer');
			clone.classList.add('z-50');
			clone.classList.add('border-white/100');

			clone.children[0].classList.remove('scale-100');
			clone.children[0].classList.remove('group-hover:scale-110');
			clone.children[0].classList.add('scale-110');

			clone.children[1].classList.remove('bg-[#081336]/25');
			clone.children[1].classList.remove('text-white');
			clone.children[1].classList.remove('group-hover:bg-white/100');
			clone.children[1].classList.remove('group-hover:text-black');
			clone.children[1].classList.remove('backdrop-blur-lg');
			clone.children[1].classList.add('bg-white/100');
			clone.children[1].classList.add('text-black');

			const thumbnails = document.querySelectorAll('.member-thumbnail');
			if (thumbnails && thumbnails.length > 0) {
				gsap.to(thumbnails, {
					scale: 0.5,
					opacity: 0,
					ease: 'circ.out',
					autoRound: false,
					duration: 0.1,
					onComplete: function () {
						gsap.set(this._targets, { visibility: 'hidden' });
					}
				});
			}

			gsap.set([clone, background], { position: 'absolute' });
			gsap.set([clone, background], from);
			gsap.set(background, { opacity: 0 });

			body.appendChild(background);
			body.appendChild(clone);

			gsap.to(clone.children[0], {
				scale: 1,
				ease: 'strong4.out',
				duration: 0.2,
				onComplete: function () {
					clone.children[0].classList.remove('scale-110');
				}
			});

			gsap.to(clone.children[1], {
				opacity: 0,
				y: 100,
				ease: 'strong4.out',
				duration: 0.2,
				onComplete: function () {
					gsap.set(this._targets, { visibility: 'hidden' });
				}
			});

			tl.to(clone, {
				...to,
				ease: 'strong4.out',
				border: 0,
				borderRadius: 24,
				duration: 0.4
			}).to(background, {
				...toBackground,
				borderRadius: 0,
				ease: 'strong4.out',
				opacity: 1,
				duration: 0.2,
				onComplete: () => {
					gsap.set(modals[i], { visibility: 'visible' });
					body.removeChild(clone);
					body.removeChild(background);
					const fullnameText = new SplitType(`#modal-text-fullname-${selected}`);
					const roleText = new SplitType(`#modal-text-role-${selected}`);
					const infoText = `#modal-info-${selected}`;
					gsap.set([fullnameText.chars, roleText.chars], {
						y: '120%',
						rotate: 15,
						opacity: 0
					});
					tl.to([fullnameText.chars, roleText.chars], {
						y: '0%',
						rotate: 0,
						stagger: 0.03,
						opacity: 1,
						duration: 1.2,
						ease: 'expo'
					});

					gsap.set(infoText, { opacity: 0, y: '200', display: 'none' });
					gsap.to(infoText, { opacity: 1, y: 0, display: 'block' });

					const closeButton = document.querySelectorAll(`#modal-close-${i}`)[0];
					gsap.set(closeButton, { scale: 0.1, opacity: 0, visibility: 'visible' });
					gsap.to(closeButton, {
						scale: 1,
						opacity: 1,
						ease: 'elastic.out'
					});
				}
			});
		}
	}

	function hideDetail(_e, i) {
		if (browser) {
			const { body } = document;
			const modal = modals[i];
			const closeButton = document.querySelectorAll(`#modal-close-${i}`)[0];

			const tl = gsap.timeline();
			tl.to(
				[modal, closeButton],
				{
					opacity: 0,
					onComplete: () => {
						gsap.set([modal, closeButton], { y: 0, opacity: 1, visibility: 'hidden' });
					}
				},
				-0.1
			);
			const thumbnails = document.querySelectorAll('.member-thumbnail');
			if (thumbnails && thumbnails.length > 0) {
				gsap.set(thumbnails, { visibility: 'visible' });
				gsap.to(thumbnails, {
					scale: 1,
					opacity: 1,
					ease: 'circ.out',
					autoRound: false,
					duration: 0.2,
					onComplete: () => {
						selected = -1;
						body.classList.remove('noscroll');
					}
				});
			}
		}
	}

	function calculatePosition(element) {
		var rect = element.getBoundingClientRect();
		var root = document.documentElement;
		var body = document.body;

		var scrollTop = window.pageYOffset || root.scrollTop || body.scrollTop || 0;
		var scrollLeft = window.pageXOffset || root.scrollLeft || body.scrollLeft || 0;

		var clientTop = root.clientTop || body.clientTop || 0;
		var clientLeft = root.clientLeft || body.clientLeft || 0;

		return {
			top: Math.round(rect.top + scrollTop - clientTop),
			left: Math.round(rect.left + scrollLeft - clientLeft),
			height: rect.height,
			width: rect.width
		};
	}

	// $: modals = modals.filter(el => el);
</script>

<section id="team-section" class="relative" use:viewport on:enterViewport={() => (isEnter = true)}>
	<div
		class="bg-section bg-section-3 transition-opacity duration-1000 {isEnter
			? 'opacity-100'
			: 'opacity-0'}"
	/>
	<div class="container mx-auto px-5">
		<div class="pt-24 pb-24 lg:pb-48">
			<SectionHeader
				title="Team"
				description="Our team is made up of highly skilled and experienced professionals who are experts in their
			respective fields."
			/>
			<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-24">
				{#each members as member, i}
					<div
						on:click={(e) => showDetail(e, i)}
						on:keydown={(e) => showDetail(e, i)}
						class="member-thumbnail relative overflow-hidden transition-all h-72 lg:h-80 w-full bg-white/10 border border-white/50 hover:border-white/100 duration-300 cursor-pointer shadow-2xl rounded-lg group"
					>
						<img
							src={member.image ? member.image : '/images/members/no_photo.jpg'}
							class="object-cover w-full h-full scale-100 group-hover:scale-110 duration-500 ease-out"
							alt="{member.firstname} {member.lastname}"
						/>
						<div
							class="absolute bottom-0 left-0 right-0 py-3 px-1 bg-[#081336]/25 backdrop-blur-lg group-hover:bg-white/100 text-white group-hover:text-black duration-300 ease-in"
						>
							<div class="uppercase text-center whitespace-pre-line">
								<span class="whitespace-nowrap font-bold">{member.firstname}</span>
								<span class="whitespace-nowrap">{member.lastname}</span>
							</div>
							<div class="text-xs uppercase text-center opacity-60">
								{member.role}
							</div>
						</div>
					</div>
				{/each}
				<a
					href="https://www.zangia.mn/company/MIRAI-TECHNOLOGIES-LLC/"
					target="_blank"
					class="member-thumbnail relative overflow-hidden transition-all h-72 lg:h-80 w-full bg-[#141d3c] border border-[#2c3451] cursor-pointer shadow-2xl rounded-lg group"
					rel="noreferrer"
				>
					<img
						src="/images/svg/questionmark.svg"
						class="object-cover w-full h-full scale-110 group-hover:scale-100 duration-500 ease-out object-left-top"
						alt="questionmark"
					/>
					<div
						class="absolute bottom-0 left-0 right-0 top-0 py-6 px-6 text-white flex flex-col justify-end items-center space-y-6"
					>
						<div class="font-thin text-lg">Wish to see your photo here?</div>
						<div
							class="text-center text-sm font-semibold py-2 px-5 bg-white text-black rounded-full"
						>
							See open positions
						</div>
					</div>
				</a>
			</div>
			<div class="mt-7">
				<p class="text-sm italic text-center">
					If you have trouble seeing open positions, please try to contact us via email or phone in
					the <a href="#contact-section" class="underline">contact</a> section.
				</p>
			</div>
		</div>
	</div>
</section>
{#each members as member, i}
	<div
		class="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-white z-40 detail overflow-y-auto"
		style="visibility: hidden"
		bind:this={modals[i]}
	>
		<div class="container mx-auto text-black max-w-6xl py-5 md:py-24 px-5">
			<div class="grid grid-cols-5 gap-x-10">
				<div class="col-span-5 md:col-span-3 order-2 pt-5">
					<h1
						id="modal-text-fullname-{i}"
						class="text-3xl md:text-6xl uppercase text-center md:text-left"
					>
						<span class="font-bold">{member.firstname}</span>
						<span>{member.lastname}</span>
					</h1>
					<h2
						id="modal-text-role-{i}"
						class="text-2xl md:text-4xl font-thin mt-1 md:mt-4 text-center md:text-left"
					>
						{member.role}
					</h2>
					<div id="modal-info-{i}">
						{#if member.bio}
							<p class="text-justify mt-10">{member.bio}</p>
						{/if}

						{#if member.current && member.current.length > 0}
							<div id="modal-current-position-{i}" class="mt-10">
								<h3 class="text-2xl uppercase font-bold text-[#081336] border-b-2 border-[#081336]">
									Current positions
								</h3>
								<ul class="list-none mt-5 space-y-5">
									{#each member.current as item}
										<li class="">
											<h4 class="text-xl font-medium capitalize">{item.title}</h4>
											<p class="text-lg">{item.organization}</p>
											<div class="flex justify-between">
												<div class="flex items-center space-x-1 text-gray-600 text-sm">
													{#if item.date}
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 20 20"
																fill="currentColor"
																class="w-5 h-5"
															>
																<path
																	fill-rule="evenodd"
																	d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
																	clip-rule="evenodd"
																/>
															</svg>
														</div>
														<div>
															{item.date}
														</div>
													{/if}
												</div>
												<div class="flex items-center space-x-1 text-gray-600 text-sm">
													{#if item.location}
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 20 20"
																fill="currentColor"
																class="w-5 h-5"
															>
																<path
																	fill-rule="evenodd"
																	d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
																	clip-rule="evenodd"
																/>
															</svg>
														</div>
														<div>
															{item.location}
														</div>
													{/if}
												</div>
											</div>
										</li>
									{/each}
								</ul>
							</div>
						{/if}

						{#if member.expierences && member.expierences.length > 0}
							<div id="modal-experience-{i}" class="mt-10">
								<h3 class="text-2xl uppercase font-bold text-[#081336] border-b-2 border-[#081336]">
									Experience
								</h3>
								<ul class="list-none mt-5 space-y-5">
									{#each member.expierences as item}
										<li class="">
											<h4 class="text-xl font-medium capitalize">{item.title}</h4>
											<p class="text-lg">{item.organization}</p>
											<div class="flex justify-between">
												<div class="flex items-center space-x-1 text-gray-600 text-sm">
													{#if item.date}
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 20 20"
																fill="currentColor"
																class="w-5 h-5"
															>
																<path
																	fill-rule="evenodd"
																	d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
																	clip-rule="evenodd"
																/>
															</svg>
														</div>
														<div>
															{item.date}
														</div>
													{/if}
												</div>
												<div class="flex items-center space-x-1 text-gray-600 text-sm">
													{#if item.location}
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 20 20"
																fill="currentColor"
																class="w-5 h-5"
															>
																<path
																	fill-rule="evenodd"
																	d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
																	clip-rule="evenodd"
																/>
															</svg>
														</div>
														<div>
															{item.location}
														</div>
													{/if}
												</div>
											</div>
										</li>
									{/each}
								</ul>
							</div>
						{/if}

						{#if member.educations && member.educations.length > 0}
							<div id="modal-education-{i}" class="mt-10">
								<h3 class="text-2xl uppercase font-bold text-[#081336] border-b-2 border-[#081336]">
									Education
								</h3>
								<ul class="list-none mt-5 space-y-5">
									{#each member.educations as item}
										<li class="">
											<h4 class="text-xl font-medium capitalize">{item.title}</h4>
											<p class="text-lg">{item.organization}</p>
											<div class="flex justify-between">
												<div class="flex items-center space-x-1 text-gray-600 text-sm">
													{#if item.date}
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 20 20"
																fill="currentColor"
																class="w-5 h-5"
															>
																<path
																	fill-rule="evenodd"
																	d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
																	clip-rule="evenodd"
																/>
															</svg>
														</div>
														<div>
															{item.date}
														</div>
													{/if}
												</div>
												<div class="flex items-center space-x-1 text-gray-600 text-sm">
													{#if item.location}
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 20 20"
																fill="currentColor"
																class="w-5 h-5"
															>
																<path
																	fill-rule="evenodd"
																	d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
																	clip-rule="evenodd"
																/>
															</svg>
														</div>
														<div>
															{item.location}
														</div>
													{/if}
												</div>
											</div>
										</li>
									{/each}
								</ul>
							</div>
						{/if}

						{#if member.projects && member.projects.length > 0}
							<div id="modal-projects-{i}" class="mt-10">
								<h3 class="text-2xl uppercase font-bold text-[#081336] border-b-2 border-[#081336]">
									Projects
								</h3>
								<ul class="list-disc ml-5 mt-5">
									{#each member.projects as item}
										<li class="">
											<p class="text-lg">{item}</p>
										</li>
									{/each}
								</ul>
							</div>
						{/if}

						{#if member.achievements && member.achievements.length > 0}
							<div id="modal-achievements-{i}" class="mt-10">
								<h3 class="text-2xl uppercase font-bold text-[#081336] border-b-2 border-[#081336]">
									Achievements
								</h3>
								<ul class="list-disc ml-5 mt-5">
									{#each member.achievements as item}
										<li class="">
											<p class="text-lg">{item}</p>
										</li>
									{/each}
								</ul>
							</div>
						{/if}
					</div>
				</div>
				<div class="col-span-5 md:col-span-2 order-1 relative">
					<div
						id="modal-image-{i}"
						class="w-full aspect-[3/4] overflow-hidden shadow-2xl rounded-3xl sticky top-24 bottom-24"
					>
						<img
							src={member.image ? member.image : '/images/members/no_photo.jpg'}
							class="h-full w-full object-cover"
							alt="{member.firstname} {member.lastname}"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
	<button
		type="button"
		id="modal-close-{i}"
		class="fixed right-2 top-2 z-50 w-16 h-16 bg-white/50 border border-black/50 text-black rounded-full flex justify-center items-center hover:opacity-100"
		style="visibility: hidden"
		on:click={(e) => hideDetail(e, i)}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
		</svg>
	</button>
{/each}
