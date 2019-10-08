export default async function (before, after, limit, query = 'top') {
  try {
    const queryString = []
    before ? queryString.push(`before=${before}`) : null
    after ? queryString.push(`after=${after}`) : null
    limit ? queryString.push(`limit=${limit}`) : null
    const params = queryString.length ? '?' : ''
    const response = await fetch(`https://www.reddit.com/${query}.json${params}${queryString.join('&')}`);
    return await response.json();
  } catch (error) {
    // eslint-disable-next-line
    console.error(error)
  }
}