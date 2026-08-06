// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { remarkHeadingId } from 'remark-custom-heading-id';

// https://astro.build/config
export default defineConfig({
	site: 'https://ukpersonal.finance',
	markdown: {
		remarkPlugins: [remarkHeadingId]
	},
	integrations: [
		starlight({
			title: 'UKPersonalFinance Wiki',
      favicon: '/favicon.png',
      customCss: ['./src/styles/custom.css'],
      head: [
        {
          tag: 'link',
          attrs: { rel: 'sitemap', href: '/sitemap-index.xml' },
        },
        {
          tag: 'script',
          attrs: { src: 'https://www.googletagmanager.com/gtag/js?id=G-TYXK2X3WJT', async: true },
        },
        {
          tag: 'script',
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TYXK2X3WJT');
          `,
        },
      ],
			components: {
				Footer: './src/components/Footer.astro',
			},
			social: [
        { icon: 'reddit', label: 'Reddit', href: 'https://reddit.com/r/UKPersonalFinance' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/kaetMg8' },
      ],
			sidebar: [
				{
					label: '✨ Follow the Flowchart ✨',
					collapsed: true,
					items: [
						{ label: '⤵️ The UKPF flowchart', slug: 'flowchart' },
						{ label: '🧮 Make a budget', slug: 'budgeting' },
						{ label: '☔️ Start emergency fund', slug: 'emergency-fund' },
						{ label: '📚 Read more', slug: 'recommended-resources' },
						{ label: '🏖 Autoenroll in pension', slug: 'pensions' },
						{ label: '💳 Pay expensive debts', slug: 'debt' },
						{ label: '🚨 Fill emergency fund', slug: 'emergency-fund' },
						{ label: '🚗 Save for future goals', slug: 'goals' },
					],
				},
				{
					label: 'The Basics',
					items: [
						{ label: 'Budgeting', slug: 'budgeting' },
						{ label: 'Living Costs', slug: 'living-costs' },
						{ label: 'Defining your goals', slug: 'goals' },
						{ label: 'Should I Buy This?', slug: 'spending' },
						{ label: 'Emergency Fund', slug: 'emergency-fund' },
						{ label: 'Helping family and friends', slug: 'helping-family-and-friends' },
						{ label: 'Savings Accounts', slug: 'savings' },
						{ label: 'Insurance', slug: 'insurance' },
						{ label: 'Scams', slug: 'scams' },
					],
				},
				{
					label: 'Borrowing',
					items: [
						{ label: 'Emergency help', slug: 'emergency-help' },
						{ label: 'Debt Repayment', slug: 'debt' },
						{ label: 'Credit Ratings', slug: 'credit-ratings' },
						{ label: 'Credit Cards', slug: 'credit-cards' },
						{ label: 'Student Loans', slug: 'student-loans' },
						{ label: 'Mortgages', slug: 'mortgages' },
						{ label: 'Mortgage overpayments vs investments', slug: 'mortgage-overpayments-vs-investments' },
					],
				},
				{
					label: 'Investing',
					items: [
						{ label: 'Investing 101', slug: 'investing-101' },
						{ label: 'Index Funds', slug: 'index-funds' },
						{ label: 'Market Timing', slug: 'market-timing' },
						{ label: 'I have £x, what should I do with it?', slug: 'lump-sum' },
						{ label: 'Passive Income', slug: 'passive-income' },
						{ label: 'Buy-To-Let', slug: 'buy-to-let' },
						{ label: 'Fees', slug: 'fees' },
						{ label: 'UK Funds Q&A', slug: 'uk-funds-faq' },
						{ label: 'Financial Advice', slug: 'financial-advice' },
					],
				},
				{
					label: 'Investment Accounts',
					items: [
						{ label: 'ISAs', slug: 'isa' },
						{ label: 'Lifetime ISAs (LISAs)', slug: 'lisa' },
						{ label: 'Pensions', slug: 'pensions' },
						{ label: 'Retirement Planning', slug: 'retirement-planning' },
						{ label: 'ISA vs LISA vs Pension', slug: 'isa-vs-lisa-vs-pension' },
						{ label: 'Investing for your children', slug: 'investing-for-your-children' },
						{ label: 'Which broker should I use?', slug: 'which-broker-should-i-use' },
						{ label: 'FSCS Protection', slug: 'fscs-protection-for-investments' },
					],
				},
				{
					label: 'Tax',
					items: [
						{ label: 'Income Tax – The Basics', slug: 'income-tax' },
						{ label: 'Tax Traps and Tax Efficiency', slug: 'tax-traps-and-tax-efficiency' },
						{ label: 'RSUs', slug: 'rsu' },
						{ label: 'Gifts and Inheritance Tax', slug: 'gifts-and-inheritance-tax' },
					],
				},
				{
					label: 'Additional Pages',
					items: [
						{ label: 'Recommended Resources', slug: 'recommended-resources' },
						{ label: 'UK income and wealth statistics', slug: 'statistics' },
						{
							label: 'UKPF community',
							collapsed: true,
							items: [
								{ label: 'UKPF community', slug: 'community' },
								{ label: 'Help Us Help You', slug: 'help-us-help-you' },
								{ label: 'Is this wiki advice?', slug: 'this-wiki-is-not-advice' },
							],
						},
						{ label: 'Benefit Entitlement', slug: 'benefit-entitlement' },
					],
				},
			],
		}),
		mdx(),
		sitemap(),
	],
});
