#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

struct ResType
{
    float4 _m0;
    float4 _m1;
};

struct main0_out
{
    float4 vo0 [[color(0)]];
    float4 vo1 [[color(1)]];
};

struct main0_in
{
    float4 v [[user(locn0)]];
};

fragment main0_out main0(main0_in in [[stage_in]])
{
    main0_out out = {};
    ResType _28;
    _28._m0 = modf(in.v, _28._m1);
    out.vo1 = _28._m1;
    out.vo0 = _28._m0;
    return out;
}

