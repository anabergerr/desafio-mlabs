export const fetchSocial = async () => {
  try {
    const response = await fetch('/social-networks.json')
    const socialNetworksData: { data: [] } = await response.json();
    return socialNetworksData.data
  } catch (error) {
    console.error('Erro ao buscar dados:', error)
  }
}