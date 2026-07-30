
type txt =
{
enter: string
};
export default function input({enter}:txt)
{
  return (
    <input
      type="text"
      placeholder={enter}
    />
  );
}