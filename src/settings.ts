export const profile = {
	fullName: 'Anna Yaghobová',
	title: 'Ph. D.',
	institute: 'Faculty of Mathematics and Physics',
	author_name: 'Anna Yaghobová', // Author name to be highlighted in the papers section
	research_areas: [
  {
    title: 'Computing Education',
    description: 'Research on teaching and learning core concepts of computer science, with a focus on lower secondary education.',
    field: 'education',
  },
  {
    title: 'Students’ Preconceptions',
    description: 'Investigation of students’ everyday ideas and understanding of digital technologies, especially the internet and computer systems.',
    field: 'psychology',
  },
  {
    title: 'Instructional materials',
    description: 'Design and evaluation of instructional materials for teaching about digital systems and technologies.',
    field: 'technology',
  },
],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'anna.yaghobova@matfyz.cuni.cz',
	linkedin: '',
	x: '',
	bluesky: '',
	github: '',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=30ksXzcAAAAJ&hl=cs',
	inspire: '',
	arxiv: '',
	orcid: 'https://orcid.org/0000-0002-2102-7515',
	instagram: 'https://www.instagram.com/annayaghobova/',
	wos: 'https://www.webofscience.com/wos/author/record/GZO-6590-2022',
	researchgate: 'https://www.researchgate.net/profile/Anna-Yaghobova'
}

export const template = {
	website_url: 'https://annayaghobova.github.io', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '/my-cv' // Repository name starting with /
}

export const seo = {
	default_title: 'Anna Yaghobová',
	default_description: 'Personal page of Anna Yaghobová.',
	default_image: '/images/astro-academia.png',
}
