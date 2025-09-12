<script>
	import SectionHeader from '../section-header.svelte';
	import viewport from '../useViewportAction';
	import { browser } from '$app/environment';
	import gsap from 'gsap';
	import SplitType from 'split-type';
	import { locale, _ } from 'svelte-i18n';
	import { goto } from '$app/navigation';
	import {
		createCopyLinkFunction,
		createCloseModalFunction,
		createUrlParamHandler,
		createToastSystem
	} from '../modal-utils.js';
	import membersJP from '../i18n/members-jp.ts';

	// Props
	export let teamMemberParam = null;

	// English member data
	const membersEN = [
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
			role: 'Research Engineer',
			firstname: 'Sumiyajav',
			lastname: 'Sarangerel',
			image: 'images/members/sumiyajav.jpg',
			bio: null,
			current: [
				{
					title: 'Graduate Research Assistant',
					organization: 'MIT ARCLab',
					date: 'Since June 2023',
					location: 'Cambridge, MA'
				}
			],
			expierences: [
				{
					title: 'Undergraduate Research Assistant',
					organization: 'MIT Senseable City Lab',
					date: 'Sep. 2022 - May 2023',
					location: 'Cambridge, MA'
				},
				{
					title: 'Software Engineering Intern',
					organization: 'Iterative Health',
					date: 'June 2022 - Aug. 2022',
					location: 'Cambridge, MA'
				}
			],
			educations: [
				{
					title: 'M.Eng in Artificial Intelligence',
					organization: 'Massachusetts Institute of Technology (MIT)',
					date: 'Expected June 2025',
					location: 'Cambridge, MA'
				},
				{
					title: 'B.S. in Computer Science and Engineering',
					organization: 'Massachusetts Institute of Technology (MIT)',
					date: 'Feb 2024',
					location: 'Cambridge, MA'
				}
			],
			projects: [
				'Uncertainty Calibration of LLMs based on prompt engineering',
				'Time Series Machine Learning for Space Object Density Forecasting'
			],
			achievements: [
				'49th International Physics Olympiad Silver medal, 2018, Lisbon, Portugal',
				'19th Asian Physics Olympiad Bronze medal, 2018, Hanoi, Vietnam',
				'48th International Physics Olympiad Bronze medal, 2017, Yogyakarta, Indonesia'
			]
		},
		{
			role: 'Manager, Bridge Engineer',
			firstname: 'Ganbold',
			lastname: 'Sukhbat',
			image: '/images/members/ganbold.jpeg',
			bio: null,
			current: [
				{
					title: 'Manager, Bridge Engineer',
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
			role: 'Manager, Bridge Engineer',
			firstname: 'Ganbayar',
			lastname: 'Amgalan',
			image: '/images/members/ganbayar_a.jpeg',
			bio: null,
			current: [
				{
					title: 'Manager, Bridge Engineer',
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
			role: 'Team Leader',
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
			role: 'Software Engineer',
			firstname: 'Munkh-Erdene',
			lastname: 'Otgonbold',
			image: '/images/members/munkherdene.jpeg',
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
			role: 'Software Engineer',
			firstname: 'Byambadorj',
			lastname: 'Baasan',
			image: '/images/members/byambadorj.jpeg',
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
			role: 'Software Engineer',
			firstname: 'Enkhtur',
			lastname: 'Enkhee',
			image: '/images/members/enkhtur.jpeg',
			bio: null,
			current: [
				{
					title: 'Software Engineer',
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

		{
			role: 'Software engineer',
			firstname: 'Badamsereedari',
			lastname: 'Togtool',
			image: '/images/members/badamsereedari.jpg',
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
					organization: 'Grapecity Mongolia LLC',
					date: '2017-2024',
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
				'ASR insurance system',
				'ETL tool for ARD, State bank',
				'NES banking system',
				'Polaris NBFIs system'
			],
			achievements: [
				'Outstanding Graduate Student Award, 2017',
				'Employee of the year, Grapecity Mongolia LLC, 2020',
				'Employee of the year, Grapecity Mongolia LLC, 2023'
			]
		},
		{
			role: 'Software Engineer',
			firstname: 'Biziya',
			lastname: 'Sarangerel',
			image: '/images/members/bizya.jpg',
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
					title: 'Research assistant',
					organization: 'Laser Research Laboratory, National University of Mongolia',
					date: null,
					location: 'Mongolia'
				}
			],
			educations: [
				{
					title: 'A Bachelor of Science in Theoretical Physics',
					organization: 'National University of Mongolia ',
					date: '2019 - 2024',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			projects: [
				'Bachelor Thesis: Programming the Hartree-Fock Algorithm/Applications to Simple Atomic Systems '
			],
			achievements: ['2017 Bronze Medal, National Physics Olympiad, Mongolia']
		},
		{
			role: 'Software Engineer',
			firstname: 'Erkhembayar',
			lastname: 'Ganbold',
			image: '/images/members/erkhembayar.jpg',
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
					title: 'Research assistant',
					organization: 'United Arab Emirates University',
					date: '2020 - 2022',
					location: 'United Arab Emirates'
				}
			],
			educations: [
				{
					title: 'A Bachelor of Electronic Engineering',
					organization: 'School of Communication and Information Technology',
					date: '2016 - 2020',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			projects: [
				'NSDevil: Intelligent Smart Device Delivery Service.',
				'UAE University Project: Fisheye camera traffic monitoring system.',
				'UAE University Startup: "Meta touch" Elevetor operates using touchless technology.',
				'Bachelor Thesis: Control of Seesaw balancing using Q-learning based on Reinforcement learning algorithm.',
				'Asian Development Bank Project: Robot system development and experiment.'
			],
			achievements: [
				'“ABU Robocon 2019 Mongolia” runner up prize.',
				'“Autonomous robot 2019” 1 st prize.',
				'“Autonomous robot 2024” 1 st prize.'
			]
		},
		{
			role: 'Software Engineer',
			firstname: 'Ganzorig',
			lastname: 'Batnasan',
			image: '/images/members/ganzorig.jpg',
			bio: null,
			current: [
				{
					title: 'Software Engineer',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2025',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			expierences: [
				{
					title: 'Research assistant',
					organization:
						'Natural Language Processing Department, Mohamed Bin Zayed University of Artificial Intelligence',
					date: 2023 - 2024,
					location: 'Abu Dhabi, United Arab Emirates'
				},
				{
					title: 'Research assistant',
					organization: 'AI and Robotics Lab, United Arab Emirates University',
					date: 2020 - 2024,
					location: 'Abu Dhabi, United Arab Emirates'
				},
				{
					title: 'Intern',
					organization: 'Dentsu Data Artist Mongolia',
					date: null,
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			educations: [
				{
					title: 'Master of Science in Engineering',
					organization: 'United Arab Emirates University',
					date: '2022 - 2024',
					location: 'Abu Dhabi, United Arab Emirates'
				},
				{
					title: 'Bachelor of Electronic Engineering',
					organization: 'Mongolian University of Science and Technology',
					date: '2016-2020',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			projects: [
				'Master Thesis: Vision Transformer for Sign Language Recognition',
				'Bachelor Thesis: Deep Reinforcement Learning based mobile robot navigation',
				'State Space Control of Inverted Pendulum based unstable system',
				'Computer vision based line keeping robot',
				'Fisheye8K: A benchmark and dataset for fisheye camera object detection, CVPRW2023',
				'Ultra-low resolution infrared sensor-based wireless sensor network for privacy-preserved recognition of daily activities of living',
				'8th AI City Challenge, CVPR2024',
				'CVQA: Culturally-diverse multilingual visual question answering benchmark, NeurIPS2024'
			]
		},
		{
			role: 'Software Engineer',
			firstname: 'Tuguldur',
			lastname: 'Bayarsaikhan',
			image: '/images/members/tuguldur.jpg',
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
					title: 'Machine Learning Engineer',
					organization: 'Hand Pro LLC',
					date: 2023 - 2024,
					location: 'Mongolia'
				},
				{
					title: 'Machine Learning Engineer Intern',
					organization: 'URECA LLC',
					date: 2022 - 2022,
					location: 'Mongolia'
				},
				{
					title: 'Developer',
					organization: 'Infinite Solutions LLC',
					date: 2021 - 2022,
					location: 'Mongolia'
				}
			],
			educations: [
				{
					title: 'Bachelor in Computer Science',
					organization: 'National University of Mongolia ',
					date: '2019 - 2025',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			projects: [
				'Identifying difficulty level in university courses using Machine learning and K-Means clustering algorithm',
				'Continuous Sign Language Translation using GNN-based encoder and decoder network',
				'Graph Representation learning with Reinforcement learning for Combinatorial Optimization Problems',
				'Bachelor Thesis: Machine Learning in the Critical Element Detection: Survey Paper under the advisory of Prof. Altannar Chinchuluun'
			],
			achievements: [
				'2015 Silver Medal, State Physics Olympiad, Mongolia',
				'2019 First Place, PROCON - National Students Programming Contest',
				'2022 Scholarship Award - Oyutolgoi',
				'2023 2nd Place - NUM Appathon',
				'2023 3rd Place - NUM Startup 3.0'
			]
		},
		{
			role: 'Software Engineer',
			firstname: 'Sanjaa-Ish',
			lastname: 'Lkhasurenjav',
			image: '/images/members/sanjaa.jpg',
			bio: null,
			current: [
				{
					title: 'Software Engineer',
					organization: 'Mirai Technologies LLC',
					date: 'Since 2024',
					location: 'Ulaanbaatar, Mongolia'
				}
			],

			educations: [
				{
					title: 'Bachelor in electronics engineering',
					organization: 'National University of Mongolia',
					date: '2020 - 2025',
					location: 'Ulaanbaatar, Mongolia'
				}
			],
			projects: [
				'Bachelor Thesis: Development of a Manually Controlled Four-Wheeled Mecanum Robot with PID Control and Utilizing ROS',
				'Development of a Fully Automatic Four-Wheeled Mecanum Robot Using Deep Learning and ROS'
			],
			achievements: [
				'2023 National Electronics Olympiad, 1st place (Team)',
				'2022 National Robotics Competition, 3rd place',
				'2024 National Robotics Competition, 1st place'
			]
		}
	];

	// Select members based on current language
	$: members = $locale === 'jp' ? membersJP : membersEN;

	let isEnter = false;
	let selected = -1;
	let modals = [];
	let selectedMember = null;
	let isClosingModal = false;
	let copySuccess = false;
	let showToast = false;
	let toastMessage = '';

	// Create toast system using utility
	const { showToast: showCopyToast } = createToastSystem(
		(show) => {
			showToast = show;
		},
		(message) => {
			toastMessage = message;
		}
	);

	// Handle URL parameter to open specific member modal
	$: if (browser && teamMemberParam && !isClosingModal) {
		// Double-check that the parameter still exists in the URL
		const urlParams = new URLSearchParams(window.location.search);
		const currentMemberParam = urlParams.get('member');

		if (currentMemberParam === teamMemberParam) {
			const memberIndex = members.findIndex((member) => {
				const memberKey =
					`${member.firstname.toLowerCase()}_${member.lastname.toLowerCase()}`.replace(/\s+/g, '_');
				return memberKey === teamMemberParam;
			});

			if (memberIndex !== -1 && selected === -1) {
				// Set flag to prevent reopening during navigation
				isClosingModal = true;
				showDetailFromUrl(memberIndex);
				// Reset flag after modal is opened
				setTimeout(() => {
					isClosingModal = false;
				}, 1000);
			}
		}
	}

	function showDetailFromUrl(i) {
		if (browser) {
			// Scroll to team section first
			const teamSection = document.getElementById('team-section');
			if (teamSection) {
				teamSection.scrollIntoView({ behavior: 'smooth' });
			}

			// Small delay to let the scroll complete
			setTimeout(() => {
				selected = i;
				selectedMember = members[i];
				const { body } = document;
				const thumbnail = document.querySelectorAll('.member-thumbnail')[i];

				if (!thumbnail || !modals[i]) return;

				body.classList.add('noscroll');

				const clone = thumbnail.cloneNode(true);
				const background = thumbnail.cloneNode(false);

				const from = calculatePosition(thumbnail);
				const to = calculatePosition(modals[i]);

				const toBackground = {
					top: 0,
					left: 0,
					width: '100vw',
					height: '100vh'
				};

				const thumbnails = document.querySelectorAll('.member-thumbnail');
				gsap.set(thumbnails, { visibility: 'hidden' });
				gsap.set(thumbnails, {
					scale: 0.5,
					opacity: 0,
					ease: 'circ.out',
					autoRound: false,
					duration: 0.1,
					onComplete: function () {
						gsap.set(this._targets, { visibility: 'hidden' });
					}
				});

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

				const tl = gsap.timeline();
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

						gsap.to([fullnameText.chars, roleText.chars], {
							y: '0%',
							rotate: 0,
							opacity: 1,
							ease: 'elastic.out',
							duration: 0.8,
							stagger: 0.02,
							delay: 0.2
						});

						gsap.fromTo(
							infoText,
							{
								opacity: 0,
								y: 20
							},
							{
								opacity: 1,
								y: 0,
								ease: 'elastic.out',
								delay: 0.4,
								duration: 0.6
							}
						);

						const closeButton = document.querySelectorAll(`#modal-close-${i}`)[0];

						gsap.set(closeButton, { scale: 0.1, opacity: 0, visibility: 'visible' });
						gsap.to(closeButton, {
							scale: 1,
							opacity: 1,
							ease: 'elastic.out'
						});
					}
				});
			}, 300);
		}
	}

	// Create copy link function using utility
	function copyMemberLink(member, event) {
		const memberKey = `${member.firstname.toLowerCase()}_${member.lastname.toLowerCase()}`.replace(
			/\s+/g,
			'_'
		);

		// Call the utility function directly with the event
		const copyFunction = createCopyLinkFunction('member', memberKey, showCopyToast);
		copyFunction(event);
	}

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
			isClosingModal = true;
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
						selectedMember = null;
						body.classList.remove('noscroll');

						// Check if modal was opened via URL parameter - only in browser
						if (browser) {
							const urlParams = new URLSearchParams(window.location.search);
							const hasMemberParam = urlParams.has('member');

							if (hasMemberParam) {
								// If opened via URL, go to main domain
								isClosingModal = true; // Prevent modal from reopening
								goto('/', { replaceState: true });
								// Reset flag after navigation completes
								setTimeout(() => {
									isClosingModal = false;
								}, 500);
							}
						}
						// If opened via card click, just close modal (no navigation)
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

	function closeModal() {
		if (browser && selected !== -1) {
			// Use the existing hideDetail function to handle animations
			hideDetail(null, selected);
		}
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
			<SectionHeader title={$_('team.title')} description={$_('team.description')} />
			<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-24">
				{#each members as member, i}
					<div
						data-member-index={i}
						on:click={(e) => showDetail(e, i)}
						on:keydown={(e) => showDetail(e, i)}
						class="member-thumbnail relative overflow-hidden transition-all h-72 lg:h-80 w-full bg-white/10 border border-white/50 hover:border-white/100 duration-300 cursor-pointer shadow-2xl rounded-lg group"
					>
						<div class="relative">
							<img
								src={member.image ? member.image : '/images/members/no_photo.jpg'}
								class="object-cover w-full h-full scale-100 group-hover:scale-110 duration-500 ease-out"
								alt="{member.firstname} {member.lastname}"
							/>
							<!-- Share Button on Image -->
							<button
								on:click|stopPropagation={(e) => copyMemberLink(member, e)}
								class="absolute top-2 right-2 z-10 bg-black/70 hover:bg-black/90 text-white p-1 rounded-full transition-all duration-300 w-7 h-7 flex items-center justify-center shadow-md"
								title="Copy link to clipboard"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									class="w-4 h-4"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0-3.933-2.185 2.25 2.25 0 0 0 3.933 2.185Z"
									/>
								</svg>
							</button>
						</div>
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
						<div class="font-thin text-lg">{$_('team.career')}</div>
						<div
							class="text-center text-sm font-semibold py-2 px-5 bg-white text-black rounded-full"
						>
							{$_('team.cta')}
						</div>
					</div>
				</a>
			</div>
			<div class="mt-7">
				<p class="text-sm italic text-center">
					{$_('team.trouble_seeing_part1')}
					<a href="#contact-section" class="underline">{$_('team.trouble_seeing_part2')}</a>
					{$_('team.trouble_seeing_part3')}
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
									{$_('team.current_positions')}
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
									{$_('team.experience')}
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
									{$_('team.education')}
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
									{$_('team.projects')}
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
									{$_('team.achievements')}
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
	<!-- Share Button for Modal -->
	<button
		type="button"
		id="modal-close-{i}"
		class="fixed right-2 top-2 z-50 w-16 h-16 bg-white/50 border border-black/50 text-black rounded-full flex justify-center items-center hover:opacity-100"
		style="visibility: hidden"
		on:click={closeModal}
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

<!-- Toast Notification -->
{#if showToast}
	<div
		class="fixed left-1/2 bottom-8 z-[9999] -translate-x-1/2 bg-black/90 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 text-base animate-fade-in-out pointer-events-none select-none"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="w-5 h-5 text-green-400"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
		</svg>
		<span>{toastMessage}</span>
	</div>
{/if}

<style>
	@keyframes fade-in-out {
		0% {
			opacity: 0;
			transform: translateY(20px) scale(0.95);
		}
		10% {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
		90% {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
		100% {
			opacity: 0;
			transform: translateY(20px) scale(0.95);
		}
	}
	.animate-fade-in-out {
		animation: fade-in-out 2s cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
