---
title: DIY Global Tracker
description: How to build your own global equity tracker from regional index funds.
---

:::note
This article was originally written a few years ago, when low-cost world index trackers were not widely available. The complexity of running your own DIY global tracker is now likely not worth the much smaller fee saving.
:::

You may have read threads in the subreddit, or other sources such as [Monevator](http://monevator.com/) or Tim Hale's Smarter Investing, about passive investing and decided that the best thing for you to invest your money in is a global equity tracker.

That's easy, since there are funds out there that do exactly that, and they are the best path for 99% of investors. [You can read about them here](/index-funds/). The following article shows a much more complex approach which might save a small amount of money for those with over £100k of investments.

## Why build your own global equity tracker?

What if you don't want to invest in a standard global equity fund? What if you're not happy with Lifestrategy's UK bias or find Consensus 100's OCF of 0.23% too expensive for your tastes? Or maybe you want finer control over the precise allocation of your money? In that case, you might be interested in building your own global tracker.

As ever, there are pros and cons of the DIY approach:

### Pros

- Cheaper than buying a pre-packaged global tracker
- Allows more control over sector/country allocations

### Cons

- Requires ongoing monitoring of asset allocations - no ability to fund and forget
- Requires rebalancing which costs money, reducing returns
- Regular monitoring of the portfolio might encourage bad habits such as market timing

Despite the hassles of the DIY approach, the savings add up to thousands of pounds over the lifetime of a wealthy investor in return for less than an hour a month.

## Determining global sector weightings

You've taken the plunge and decided to build your own global tracker! The first step is the hardest: determining the global sector weightings. To complicate matters, there are three companies ([MSCI Inc.](https://www.msci.com/world), [S&P Dow Jones](https://www.spglobal.com/spdji/en/), and [FTSE Russell](http://www.ftserussell.com/)) that deal in indices and they all have their own unique methodologies for determining what is included in a particular index, but that's for another post! We won't worry about the fine details too much as the weightings turn out to be very similar, to within 2% or 3% of each other. You can also use [the allocation that Vanguard publish](https://www.vanguardinvestor.co.uk/investments/vanguard-ftse-global-all-cap-index-fund-gbp-income-shares/portfolio-data).

We also need to decide how granular our investment strategy is going to be. The simplest option is to buy two funds only, such as:

- Developed Markets
- Emerging Markets

You can use that as a starting point to tweak your investment strategy. If you want to allocate a bit more to the UK, then you would need to invest in three funds:

- Developed Markets Ex. UK
- UK
- Emerging Markets

You could even break down the Developed Markets fund into Europe, America, UK, Japan, Pacific Ex. Japan, but at that point you're looking at potentially six funds, which is too many for easy management. We strongly believe you should have a maximum of three funds for a global equity tracker to keep matters simple.

### Weighting for the UK

We'll go with three funds as outlined above. The first step is to determine how big the UK is as a percentage of the global market. We do this by looking at the global indices.

Starting with MSCI, we want [the ACWI index](https://www.msci.com/acwi) which covers the entire world. (It doesn't matter too much if you look at the MSCI ACWI index or the MSCI ACWI IMI index -- the results are very similar for our purposes).

Looking at the [factsheet of the MSCI ACWI index](https://www.msci.com/documents/10199/a71b65b5-d0ea-4b5c-a709-24b1213bc3c5), we see that the UK makes up approximately 5.8% of the world from the pie chart at the bottom of the second page. This suggests that an allocation of 6% would be a good starting point for a UK fund. The [S&P Global BMI index](https://www.spglobal.com/spdji/en/indices/equity/sp-global-bmi/) backs this up with a weighting of 5.7% for the UK, as does the [FTSE Russell All-World index](	https://www.lseg.com/en/ftse-russell/indices/global-equity-index-series) with a weighting of 6.1% in [the factsheet](https://research.ftserussell.com/Analytics/FactSheets/Home/DownloadSingleIssue?issueName=AWORLDS&isManual=False).

### Weightings for emerging markets

To keep things simple, we'll do Emerging Markets next instead of Developed Markets Ex. UK, so that when we work out the weighting of Emerging Markets, we can add that to the UK's 6%, and then subtract that from 100% to get the weighting of Developed Markets Ex. UK! It sounds complicated, but it's very simple to do in practice.

Because Emerging Markets is a collection of countries, we can't work out the weighting for Emerging Markets in the same way we did for the UK without doing a lot of adding up! Instead, it's easier to look at the size of the Emerging Markets indices and express that as a percentage of the corresponding global index.

For MSCI, we look at the [MSCI Emerging Markets Index](https://www.msci.com/emerging-markets) first. According to [its factsheet](https://www.msci.com/documents/10199/c0db0a48-01f2-4ba9-ad01-226fd5678111), the index's market cap is $4,384,934.52 million. The corresponding global index [(the ACWI index)](https://www.msci.com/acwi)'s market cap is $39,962,383.81 million. So the calculation looks like:

[Market Cap of Emerging Markets Index] ÷ [Market Cap of Global Index] × 100%

In this case, we get

4,384,934.52 ÷ 39,962,383.81 = 0.10972655

Then times this by 100% to get

0.10972655 × 100% = 10.973%

So a reasonable allocation for Emerging Markets according to MSCI is about 11%.

We can do the same thing for the S&P indices, although it involves an additional calculation because the factsheets for the S&P indices don't give you the market cap of the indices directly. Instead, you have to multiply the mean market cap by the number of constituents to get the total market cap.

The market cap of the S&P Emerging BMI index is:

[mean market cap] × [number of constituents]

From the Index Characteristics table on page 3 of [the factsheet](https://us.spindices.com/idsenhancedfactsheet/file.pdf?calcFrequency=M&force_download=true&hostIdentifier=48190c8c-42c4-46af-8d1a-0cd5db894797&indexId=5457901), we see that the mean market cap is $3,766.26 million and there are 3044 constituents, so the market cap is

$3,766.26 million × 3044 = $11,464,495.44 million

Doing the same calculation for the S&P Global BMI index via [its factsheet](https://us.spindices.com/idsenhancedfactsheet/file.pdf?calcFrequency=M&force_download=true&hostIdentifier=48190c8c-42c4-46af-8d1a-0cd5db894797&indexId=5457913) is

$5337.32 million × 11603 = $61,928,923.96 million

So the emerging markets as a percentage of the global market is

(11,464,495.44 ÷ 61,928,923.96) × 100% = 17.657%

That suggests an allocation of 18% or so is suitable for emerging markets, according to the S&P indices.

Let's look at the FTSE Russell indices now. Thankfully they give us the market cap directly, so that's one less calculation! In fact, the FTSE Russell All-World Index's factsheet helpfully includes the data for Emerging Markets in its Index Characteristics table so we don't need to look for the factsheet of the FTSE Emerging Market index! In the Index Characteristics table on page 3 of the FTSE Russell All-World Index [factsheet](http://www.ftse.com/Analytics/FactSheets/Home/DownloadSingleIssue/GAE?issueName=AWORLDS), the market cap of the global index is $40,310,065 million while the market cap of the emerging markets index is $3,696,279 million. So our calculation is

(3,696,279 ÷ 40,310,065) × 100% = 9.17%

Therefore an allocation of 9% to Emerging Markets is sensible according to FTSE Russell.

We have a conflict here between the S&P index and the MSCI & FTSE Russell indices on the size of Emerging Markets. We personally think that the MSCI & FTSE Russell indices are closer to the truth than the S&P index. That's why we think an allocation of 10% to Emerging Markets is a good compromise. The discrepancy is due to the different methodologies used, but that's too boring to talk about in this guide!

### Weightings for developed markets Ex. UK

We just need to do the Developed Markets Ex. UK now, but the calculation is very simple this time! We have 10% for Emerging Markets and 6% for UK. That adds up to 16%, so that means that Developed Markets Ex. UK must be

100% - 16% = 84%

That means an allocation of 84% is suitable for Developed Markets Ex. UK.

If you want just Developed Markets and Emerging Markets, we can just add the 6% of the UK to the Developed Markets Ex. UK's 84% to get 90%. So for a two fund investment strategy, we could invest 90% of our money into a Developed Markets fund and 10% into an Emerging Markets fund to approximate a global equity tracker.

That's the hard bit over with!

## Putting our investment strategy into practice

We've worked out that we want to allocate our money into the following regions:

| Region                 | Allocation |
| ---------------------- | ---------- |
| UK                     | 6%         |
| Emerging Markets       | 10%        |
| Developed World Ex. UK | 84%        |

Now we just need to find suitable funds to invest into. To compare our costs to Vanguard's Lifestrategy 100 and FTSE Global All Cap funds, we'll use Vanguard funds here as an example, but you should always look for the cheapest possible funds. At time of writing, the BlackRock UK tracker is 0.02% cheaper than Vanguard's UK tracker at 0.06%. So Vanguard is not always the cheapest.

We'll invest our money into the following funds:

| Fund                                                                                                                                                                           | Cost (OCF) |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| [Vanguard FTSE U.K. All Share Index Unit Trust](https://www.vanguardinvestor.co.uk/investments/vanguard-ftse-uk-all-share-index-unit-trust-gbp-accumulation-shares)            | 0.06%      |
| [Vanguard Emerging Markets Stock Index](https://www.vanguardinvestor.co.uk/investments/vanguard-emerging-markets-stock-index-fund-accumulation-shares)                         | 0.23%      |
| [Vanguard FTSE Developed World ex-U.K. Equity Index](https://www.vanguardinvestor.co.uk/investments/vanguard-ftse-developed-world-ex-uk-equity-index-fund-accumulation-shares) | 0.14%      |

How do we work out our total investment cost? We need to multiply the cost of the fund by its proportional weighting in our portfolio and add them all up to get the total cost. Like so:

(0.06% × 0.06) + (0.23% × 0.1) + (0.14% × 0.84) = 0.1442%

So we pay about 0.14% of our portfolio's value in costs to funds per year. This is in contrast to [FTSE Global All Cap Index](https://www.vanguard.co.uk/adviser/investments/product.html#/fundDetail/mf/portId=8617/assetCode=EQUITY/)'s 0.23%. That's a saving of 0.085% per year, or an additional £85 in your £100k portfolio after one year. It might not sound like much, but the costs really do add up after 40 years of investing due to the power of compound interest!

## Epilogue

We saw how to work out the market weightings for three different sectors. If you wanted to extend this to Japan and/or Pacific Ex. Japan, the process is exactly the same. Just look up the relevant factsheets for the appropriate index and express the market cap of that index as a percentage of the corresponding global index's market cap. Remember that all the allocations of the various sectors should add up to 100%.

You can also tweak the allocations in your portfolio if you wanted to -- there's no need to stay rigidly to the default allocation. For example, if you wanted more of an emphasis on the UK, you could have

| Region                 | Allocation |
| ---------------------- | ---------- |
| UK                     | 10%        |
| Emerging Markets       | 10%        |
| Developed World Ex. UK | 80%        |

You could also add in some bonds or REITs to diversify if you want. This guide can't help you with that though!

Assuming that you rebalance at most once a year, you should check the global weightings before rebalancing so that you can rebalance to the current global weightings instead of the global weightings that were current at the time you created your portfolio.

Finally, don't forget to invest in the cheapest funds/ETFs and the cheapest brokers for your investment habits! Do some research on the cheapest funds/ETFs and look at [Monevator's list of cheapest brokers](http://monevator.com/compare-uk-cheapest-online-brokers/) to determine which broker is best for you.

Happy investing!
