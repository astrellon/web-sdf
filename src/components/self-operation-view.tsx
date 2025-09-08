import { h, Component, JSX } from 'preact';
import { SelfOperation, SelfSdfOpCode } from '../ray-marching/scene-entities';
import ParameterEdit from './parameter-edit';
import { SdfParameter } from '../ray-marching/sdf-parameters';
import { sdfSelfOperations, sdfSelfOperationsMap } from '../ray-marching/sdf-self-operations';

interface Props
{
    readonly selfOperation: SelfOperation;
    readonly onChange: (newOperation: SelfOperation) => void;
}

const typeSelectOptions = sdfSelfOperations.map(s =>
    <option key={s.id} value={s.id}>{s.name}</option>
);

export default class SelfOperationView extends Component<Props>
{
    public render()
    {
        const { selfOperation } = this.props;

        const selectedSelfOpCode = selfOperation.type ?? 'none';

        return <div>
            <div>
                <strong>Self Op Code</strong> <select value={selectedSelfOpCode} onChange={this.onChangeSelfOpCode}>
                    <option value='none'>None</option>
                    { typeSelectOptions }
                </select>
            </div>
            <div>
                { this.renderOperationParams() }
            </div>
        </div>
    }

    private renderOperationParams = () =>
    {
        const result: JSX.Element[] = [];
        const { selfOperation } = this.props;
        const currentOperationInfo = sdfSelfOperationsMap[selfOperation.type];
        if (!currentOperationInfo)
        {
            return result;
        }

        for (const paramInfo of currentOperationInfo.params)
        {
            result.push(<ParameterEdit key={paramInfo.name} parameters={selfOperation.params} paramInfo={paramInfo} onChange={this.updateParam} />);
        }

        return result;
    }

    private updateParam = (value: number, paramInfo: SdfParameter) =>
    {
        const { selfOperation, onChange } = this.props;
        const currentParams = selfOperation.params;
        const newParams = { ...currentParams, [paramInfo.name]: value };
        onChange({ ...selfOperation, params: newParams });
    }

    private onChangeSelfOpCode = (e: Event) =>
    {
        const { selfOperation, onChange } = this.props;
        const value = (e.target as HTMLSelectElement).value as SelfSdfOpCode;
        onChange({ ...selfOperation, type: value });
    }
}