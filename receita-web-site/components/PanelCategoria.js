import {Panel} from 'primereact/panel';

const PanelCategoria = ({children}) => (
    <div className="col-sm-12 col-md-12 col-lg-3 my-5 d-none d-lg-block">
        <aside id="categoria-section" className="categoria-section">    
            <Panel id="categoria-panel" header="Categorias" className="p-0 p-fluid">
                {children}
            </Panel>   
        </aside>
    </div>
)

export default PanelCategoria;
