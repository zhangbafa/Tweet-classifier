export default async function Sns(){
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return (
        <div style={{background:'green',fontSize:'12px;height: 100px'}}>
            @sns-page.tsx
        </div>
    )
}

