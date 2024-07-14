//./src/pages
interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;

/**
 * @description
 * <Shared.Button
 * onClick={forkFeature.api.fork}
 * icon={shard.icon.fork}
 * data={forkEntity.model.forkCount} />
 */
