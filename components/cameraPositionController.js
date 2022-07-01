import Button from "@mui/material/Button";

export default function CameraPositionController(props) {
  //   propsの取り出し
  var cameraX = props.cameraX;
  var cameraY = props.cameraY;
  var cameraZ = props.cameraZ;
  var setCameraX = (cameraX) => props.setCameraX(cameraX);
  var setCameraY = (cameraY) => props.setCameraY(cameraY);
  var setCameraZ = (cameraZ) => props.setCameraZ(cameraZ);

//   onclickイKベント用関数
  var xIncrease = () => setCameraX(cameraX + 1)
  var xDecrease = () => setCameraX(cameraX - 1)
  var yIncrease = () => setCameraY(cameraY + 1)
  var yDecrease = () => setCameraY(cameraY - 1)
  var zIncrease = () => setCameraZ(cameraZ + 1)
  var zDecrease = () => setCameraZ(cameraZ - 1)

  return (
    <div>
      <p className="controller">カメラ操作</p>
      <div>
        X :　
        <Button variant="contained" size="small" onClick={() => xDecrease()}>
          ←
        </Button>
        　{cameraX}　
        <Button variant="contained" size="small" onClick={() => xIncrease()}>
          →
        </Button>
      </div>
      <div>
        Y :　
        <Button variant="contained" size="small" onClick={() => yDecrease()}>
          ←
        </Button>
        　{cameraY}　
        <Button variant="contained" size="small" onClick={() => yIncrease()}>
          →
        </Button>
      </div>
      <div>
        Z :　
        <Button variant="contained" size="small" onClick={() => zDecrease()}>
          ←
        </Button>
        　{cameraZ}　
        <Button variant="contained" size="small" onClick={() => zIncrease()}>
          →
        </Button>
      </div>
    </div>
  );
}
