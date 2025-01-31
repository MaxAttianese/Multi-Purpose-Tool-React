type featureProps = {
  k: string;
  v: string;
};

export function Feature({ k, v }: featureProps) {
  return <option value={k}>{v}</option>;
}
