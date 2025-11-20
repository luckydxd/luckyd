import { GithubLogo, LinkedinLogo } from 'phosphor-svelte';
import simoara from './assets/simoara.webp';
import diablyze from './assets/diablyze.webp';

export const profile = {
	name: 'Lucky Dawamuz Dzikri',
	title: 'Fullstack Developer',
	about:
		'Lulusan Teknik Informatika dengan pengalaman kuliah, magang, & coding camp. Terampil dalam pengembangan Fullstack yang hobi membangun aplikasi interaktif.',
	contact: {
		phone: '0895345990294',
		email: 'luckydawamuzdzikri@gmail.com',
		location: 'Cirebon, Jawa Barat'
	},
	socials: [
		{ name: 'GitHub', url: 'https://github.com/luckydxd', icon: GithubLogo },
		{ name: 'LinkedIn', url: 'https://www.linkedin.com/in/luckyd/', icon: LinkedinLogo }
	],
	skills: [
		'Laravel',
		'React.js',
		'Node.js',
		'Flutter',
		'SvelteKit',
		'PHP',
		'JavaScript',
		'Python',
		'Dart',
		'C++',
		'Tailwind CSS',
		'Bootstrap',
		'MySQL',
		'PostgreSQL',
		'Firebase',
		'Git',
		'GitHub',
		'Postman',
		'Figma'
	],
	education: [
		{
			school: 'Politeknik Negeri Indramayu',
			degree: 'D3 Teknik Informatika',
			year: 'Lulus 2025',
			meta: 'IPK 3.82'
		},
		{
			school: 'Coding Camp by DBS Foundation',
			degree: 'Fullstack Developer Cohort',
			year: 'Feb 2025 - Jul 2025',
			meta: 'Score: 92/100',
			desc: 'Program intensif 6 bulan (jarak jauh). Fokus pada pengembangan web full-stack dari fundamental front-end hingga back-end.'
		}
	],
	experience: [
		{
			role: 'Fullstack Developer (Magang)',
			company: 'CV Devgenfour',
			year: 'Jul - Des 2024',
			desc: [
				'Mengembangkan dan menerapkan berbagai sistem internal dari awal, termasuk website profil perusahaan, sistem manajemen inventaris, stok opname berbasis scan barcode, dan sistem koperasi karyawan menggunakan Laravel, PHP, JavaScript, serta HTML/CSS',
				'Berkolaborasi dalam tim, menggunakan Git dan GitHub untuk version control, code review, dan koordinasi proyek',
				'Menangani proses implementasi untuk memastikan semua sistem berjalan optimal dan dapat diakses secara online'
			]
		}
	]
};

export const projects = [
	{
		id: 1,
		title: 'Sistem Monitoring Air IoT',
		category: 'Web & IoT',
		desc: 'Platform monitoring konsumsi air real-time integrasi IoT via RESTful API Laravel.',
		fullDesc:
			'Sistem komprehensif yang menggabungkan dashboard admin, pelaporan otomatis, dan integrasi hardware IoT untuk memantau debit air rumah tangga.',
		stack: ['Laravel', 'IoT', 'MySQL', 'Bootstrap'],
		image: simoara,
		repo: 'https://github.com/luckydxd/watermonitoring'
	},
	{
		id: 2,
		title: 'Diablyze',
		category: 'Machine Learning',
		desc: 'Frontend React modern untuk prediksi dini diabetes menggunakan model Neural Network.',
		fullDesc:
			'Aplikasi kesehatan preventif yang memungkinkan pengguna input data medis dan mendapatkan prediksi risiko diabetes secara instan.',
		stack: ['React', 'Vite', 'Tailwind', 'ANN'],
		image: diablyze,
		repo: 'https://github.com/luckydxd/diablyze-fe'
	},
	{
		id: 3,
		title: 'Sistem Koperasi Digital',
		category: 'Management System',
		desc: 'Sistem manajemen simpan pinjam dan akuntansi koperasi karyawan.',
		fullDesc:
			'Digitalisasi proses koperasi mulai dari pendaftaran anggota, pengajuan pinjaman, hingga laporan keuangan otomatis.',
		stack: ['Laravel', 'MySQL', 'jQuery'],
		image:
			'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60',
		repo: 'https://github.com/luckydxd/koperasi'
	},
	{
		id: 4,
		title: 'Stok Opname Barcode',
		category: 'Warehouse',
		desc: 'Sistem audit stok gudang menggunakan pemindai barcode terintegrasi.',
		fullDesc:
			'Mempercepat proses stok opname hingga 50% dengan sistem scan barcode yang langsung terhubung ke database pusat.',
		stack: ['Laravel', 'Barcode API', 'MySQL'],
		image:
			'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=60',
		repo: 'https://github.com/luckydxd/opname'
	}
];
