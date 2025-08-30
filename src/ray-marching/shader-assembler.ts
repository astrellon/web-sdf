function makeFloatStr(input: number)
{
    let result = input.toString();
    if (result.indexOf('.') < 0)
    {
        result += '.0';
    }
    return result;
}

export default class ShaderAssembler
{
    public result: string = '';
    private firstItem = true;

    public startFunction(name: string)
    {
        this.writeValue(name + '(');
        this.firstItem = true;
    }
    public endFunction()
    {
        this.result += ')';
    }

    public writeRaw(value: string)
    {
        this.result += value;
    }

    public writeValue(value: any)
    {
        if (!this.firstItem)
        {
            this.result += ', ';
        }

        if (typeof(value) === 'number')
        {
            this.result += makeFloatStr(value);
        }
        else
        {
            this.result += value;
        }
        this.firstItem = false;
    }

    public writeParameter(index: number)
    {
        this.writeValue('uParams[' + index + ']');
    }

    public getFinal()
    {
        return `return ${this.result};`;
    }
}
