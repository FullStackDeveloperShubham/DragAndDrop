import { useState } from "react"

const DragAndDrop: React.FC = () => {
    const [data] = useState("NodeJs")
    const [draggedItem, setDraggedItem] = useState("")

    // ! Hanlde onDragStart
    const hanldeOnDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData("text/plain", data)
    }

    // ! Hanlde OnDragOver
    const hanldeOnDrageOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        console.log("its drag over ")
    }

    // ! HanldeOnDrop
    const handleOnDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        const droppedData = event.dataTransfer.getData("text/plain")
        setDraggedItem(droppedData)
        console.log("Dropped data", data)
    }

    return (
        <>

            {/* Draggable Item */}
            <div
                draggable
                onDragStart={hanldeOnDragStart}
                style={{
                    border: "2px solid #ff4d4d",
                    borderRadius: "10px",
                    height: "100px",
                    width: "100px",
                    background: "linear-gradient(135deg, #ffcccc, #ffe6e6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "grab",
                    boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
                    transition: "transform 0.2s ease",
                }}
            >
                <p style={{ fontWeight: "bold", color: "#cc0000" }}>{data}</p>
            </div>

            {/* Drop Zone */}
            <div
                onDragOver={hanldeOnDrageOver}
                onDrop={handleOnDrop}
                style={{
                    marginLeft: "20rem",
                    marginTop: "2rem",
                    border: "2px dashed #4CAF50",
                    borderRadius: "10px",
                    height: "120px",
                    width: "120px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f6fff6",
                    color: "#2e7d32",
                    fontWeight: "bold",
                    fontSize: "14px",
                    boxShadow: "2px 2px 10px rgba(0,0,0,0.05)",
                    transition: "background 0.3s ease",
                }}
                onDragEnter={(e) =>
                    (e.currentTarget.style.background = "#e8f5e9")
                }
                onDragLeave={(e) =>
                    (e.currentTarget.style.background = "#f6fff6")
                }
            >
                {draggedItem ? `✅ Placed: ${draggedItem}` : "📦 Drop Here"}
            </div>
        </>
    )
}

export default DragAndDrop
