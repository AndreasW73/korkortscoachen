export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface AddressResult {
  address: string;
}

export async function geocodeAddress(address: string): Promise<Coordinates | null> {
  if (!process.env.NEXT_PUBLIC_MAPBOX_API_KEY) {
    throw new Error("Missing MAPBOX_ACCESS_TOKEN in environment variables");
  }

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?` +
              `access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}&limit=1&country=SE`;

  const res = await fetch(url);
  const data = await res.json();

  if (!data.features || data.features.length === 0) {
    return null;
  }

  const [longitude, latitude] = data.features[0].center;
  return { latitude, longitude };
}

export async function reverseGeocode(lat: number, lon: number): Promise<AddressResult | null> {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json` +
              `?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}&limit=1&language=sv`;

  const res = await fetch(url);
  const data = await res.json();

  if (!data.features || data.features.length === 0) {
    return null;
  }

  const address = data.features[0].place_name;
  return { address };
}
