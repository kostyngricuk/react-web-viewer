interface WebViewerProps {
  url: string;
}

const WebViewer = ({ url }: WebViewerProps) => {
  return (
    <>
      <h2>Web Viewer</h2>
      <div>
        The URL is: {url}
      </div>
    </>
  )
}

export default WebViewer;