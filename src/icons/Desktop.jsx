import SvgIcon from "../components/SvgIcon"

export default function Desktop(props) {
	const {
		height=28,
		width=28,
		classNames
	} = props

	function getPath() {
		return (
			<path d="M208,40H48A24.1,24.1,0,0,0,24,64V176a24.1,24.1,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24.1,24.1,0,0,0,24-24V64A24.1,24.1,0,0,0,208,40Zm0,144H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z"></path>
		)
	}

	return (
		<SvgIcon height={height} width={width} classNames={classNames} child={getPath()}/>
	)
}