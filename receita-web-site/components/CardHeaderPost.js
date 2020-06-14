
const CardHeaderPost = ({children}) => (
    <div className="card-header">
        <header className="p-fluid">
            <h5 className="text-info font-weight-bold">Receitas</h5>
            <hr/>   
            {children}     
        </header>                      
    </div>
)

export default CardHeaderPost
